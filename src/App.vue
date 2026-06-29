<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { getCharacter, getCultivationInfo } from './utils/characterSystem'

const route = useRoute()
const showNav = computed(() => route.name === 'Home' || route.name === 'CharacterCreation')

const character = computed(() => getCharacter())
const cultivation = computed(() => getCultivationInfo())
</script>

<template>
  <div id="app-root">
    <header v-if="showNav" class="app-header">
      <div class="header-inner">
        <div class="logo" @click="$router.push('/')">
          <span class="logo-icon">📖</span>
          <span class="logo-text">知识剧场</span>
        </div>
        <nav class="nav-links">
          <!-- Character status (if exists) -->
          <div v-if="character" class="char-badge" @click="$router.push('/progress')">
            <span class="char-level-icon">{{ cultivation?.current?.icon || '🌱' }}</span>
            <span class="char-name">{{ character.name }}</span>
            <span class="char-level-name">{{ cultivation?.current?.name || '凡人' }}</span>
          </div>
          <router-link v-if="character" to="/" class="nav-link">首页</router-link>
          <router-link v-if="!character" to="/create" class="nav-link create-link">🗡️ 创建角色</router-link>
          <router-link to="/progress" class="nav-link">📊 学习进度</router-link>
          <router-link to="/parent" class="nav-link">👨‍👩‍👧 家长中心</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #f093fb, #f5576c, #fda085);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
}

.char-badge {
  display: flex; align-items: center; gap: 6px;
  padding: 4px 12px 4px 8px; border-radius: 20px;
  background: rgba(255,255,255,0.1);
  cursor: pointer; transition: all 0.2s;
}
.char-badge:hover { background: rgba(255,255,255,0.15); }
.char-level-icon { font-size: 18px; }
.char-name { font-size: 13px; font-weight: 700; color: #fff; }
.char-level-name {
  font-size: 11px; font-weight: 600; color: #FFD700;
  background: rgba(255,215,0,0.15); padding: 2px 8px;
  border-radius: 10px;
}
.create-link {
  background: linear-gradient(135deg, rgba(255,107,107,0.2), rgba(192,132,252,0.2));
  border: 1px solid rgba(255,107,107,0.3);
  border-radius: 12px; padding: 4px 12px !important;
}

main {
  min-height: 100vh;
}
</style>
