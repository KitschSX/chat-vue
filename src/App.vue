<template>
  <div class="app-container">
    <header class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/bird">FlappyBird</RouterLink>
      </nav>
    </header>
    <main class="router-view-container">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
/* 全局样式 */
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 隐藏全局滚动条 */
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden; /* 隐藏滚动条 */
}

.wrapper {
  background-color: #333;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center; /* 居中对齐 */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box; /* 确保内边距包含在宽度内 */
}

.wrapper nav {
  display: flex;
  gap: 1rem; /* 导航链接之间的间距 */
}

.wrapper nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.wrapper nav a:hover {
  background-color: #555;
  border-radius: 4px;
}

.router-view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 60px; /* 确保内容不被导航栏遮挡 */
  box-sizing: border-box; /* 确保内边距包含在宽度内 */
  overflow: hidden; /* 隐藏滚动条 */
}
</style>
