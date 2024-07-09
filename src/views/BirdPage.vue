<template>
  <div class="iframe-container">
    <iframe class="no-shadow" src="/src/html/FlappyBird/index.html"></iframe>
  </div>
</template>

<script>
export default {
  name: "bird"
}
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 确保内容不会溢出 */
  box-sizing: border-box; /* 确保内边距包含在宽度内 */
}

.no-shadow {
  border: none; /* 去除边框 */
  box-shadow: none; /* 去除阴影 */
  outline: none; /* 去除聚焦时的外框 */
  width: 100%;
  height: 100%;
}
</style>
