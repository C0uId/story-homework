<template>
  <div class="not-found">
    <div class="not-found-card">
      <div class="not-found-icon">🗺️</div>
      <h1>迷路了？</h1>
      <p>你要找的页面不存在，可能已经被时间魔法带走了。</p>
      <router-link to="/" class="back-btn">
        <span>🏠</span> 回到首页
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 24px;
}

.not-found-card {
  text-align: center;
  background: var(--bg-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 60px 40px;
  max-width: 440px;
  width: 100%;
}

.not-found-icon {
  font-size: 72px;
  margin-bottom: 16px;
  animation: floatA 3s ease-in-out infinite;
}

@keyframes floatA {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

h1 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 12px;
}

p {
  color: var(--text2);
  margin-bottom: 32px;
  line-height: 1.8;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--orange), var(--coral));
  color: #fff;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.35);
}
</style>
