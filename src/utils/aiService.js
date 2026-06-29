// AI服务模块 - 封装DeepSeek API调用
// 使用SenseNova平台的DeepSeek V4 Flash模型
// 注意：API Key 通过 .env 环境变量配置，不提交到代码仓库

const API_CONFIG = {
  apiKey: import.meta.env.VITE_AI_API_KEY || '',
  baseUrl: import.meta.env.VITE_AI_BASE_URL || 'https://token.sensenova.cn/v1',
  model: import.meta.env.VITE_AI_MODEL || 'deepseek-v4-flash',
  maxTokens: 16000,
  temperature: 0.8,
  timeout: 120000, // 2分钟超时
}

/**
 * 调用AI聊天接口（非流式）
 */
export async function chatCompletion(messages, options = {}) {
  const response = await fetch(`${API_CONFIG.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_CONFIG.apiKey}`,
    },
    body: JSON.stringify({
      model: options.model || API_CONFIG.model,
      messages,
      max_tokens: options.maxTokens || API_CONFIG.maxTokens,
      temperature: options.temperature ?? API_CONFIG.temperature,
      stream: false,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`AI API错误 (${response.status}): ${err}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || ''
}

/**
 * 调用AI聊天接口（SSE流式）
 * @param {Array} messages - 消息列表
 * @param {Function} onChunk - 每收到一块文本时的回调 (text: string) => void
 * @param {Function} onDone - 完成时的回调 (fullText: string) => void
 * @param {Function} onError - 错误时的回调 (error: Error) => void
 */
export async function chatCompletionStream(messages, { onChunk, onDone, onError, ...options } = {}) {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || API_CONFIG.timeout)

    const response = await fetch(`${API_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        model: options.model || API_CONFIG.model,
        messages,
        max_tokens: options.maxTokens || API_CONFIG.maxTokens,
        temperature: options.temperature ?? API_CONFIG.temperature,
        stream: true,
      }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const err = await response.text()
      throw new Error(`AI API错误 (${response.status}): ${err}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let fullText = ''
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() // 保留未完成的行

      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed || !trimmed.startsWith('data: ')) continue
        const data = trimmed.slice(6)
        if (data === '[DONE]') {
          onDone?.(fullText)
          return fullText
        }
        try {
          const parsed = JSON.parse(data)
          const content = parsed.choices?.[0]?.delta?.content
          if (content) {
            fullText += content
            onChunk?.(content)
          }
        } catch {
          // 解析失败跳过
        }
      }
    }

    onDone?.(fullText)
    return fullText
  } catch (error) {
    onError?.(error)
    throw error
  }
}

/**
 * 快捷方法：单轮对话
 */
export async function askAI(systemPrompt, userMessage, options = {}) {
  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userMessage },
  ]
  return chatCompletion(messages, options)
}
