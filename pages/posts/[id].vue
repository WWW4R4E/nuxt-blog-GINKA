<template>
  <div class="container">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p class="summary">{{ post.summary }}</p>
    </div>
    <div v-else>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id; // 获取动态路由参数并转换为整数
const post = ref({}); // 初始化 post 为一个空对象

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:9999/api/posts/${postId}`);
    post.value = response.data;
    console.log('获取文章成功:', post.value);
  } catch (error) {
    console.error('获取文章失败:', error.message);
    if (error.response) {
      console.error('服务器响应:', error.response.data);
    }
  }
});
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: rgb(175, 176, 177, 0.9);
}

.summary {
  white-space: pre-wrap;
}
</style>