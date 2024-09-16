<template>
  <div class="top">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <!-- 动态生成 Tab 页签 -->
      <div v-for="route_i in tabs">
        <el-tab-pane :key="route_i.name"
                     :label="route_i.name"
                     :name="route_i.name"
                     :data-router="route_i.path">
        </el-tab-pane>
      </div>

    </el-tabs>

    <a href="javascript:" @click="router.push('/login')" class="login-link">请先登录</a>
  </div>
  <!-- 路由出口，用于显示页面内容 -->
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router'

const activeName = ref('')
const router = useRouter()
const route = useRoute()

// 动态获取所有具有 name 属性的路由，排除没有 name 的路由（通常为嵌套路由）
const tabs = computed(() => {
      let r = router.getRoutes().find(r => r.name === 'Main').children.filter(r => r.name)
      return r
    } // 只生成有 name 的路由
)
// 监听标签页点击事件，切换路由
const handleClick = (tab: any) => {
  router.push({name: tab.props.name}) // 切换到对应路由
}
// 监听路由变化，更新选中的标签页
watch(
    () => route.name,
    (newRouteName) => {
      activeName.value = newRouteName as string
    },
    {immediate: true}
)
</script>

<style>

.el-tabs__item {
  font-size: 30px;

}
.login-link {
  position: absolute; /* 绝对定位 */
  right: 2em; /* 距离右边的距离 */
  font-size: 1.5rem;
  top: 45%; /* 垂直居中 */
  transform: translateY(-50%); /* 修正垂直居中 */
  text-decoration: none;
  font-weight: bold;
}
.top {
  background-color: #e8ecf0;
  font-size: 1rem;
  padding: 1em;
  line-height: 1.5;
  width: 100%;
  display: flex;
  justify-content: center; /* 居中对齐 */
  position: fixed;
  height: auto;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box; /* 确保内边距包含在宽度内 */
}

.view {
  width: 100%;
  height: 100vh;
  padding-top: 86px;
}
body{
  min-width: 600px;
}
</style>
