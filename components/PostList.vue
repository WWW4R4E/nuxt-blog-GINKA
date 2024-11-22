<template>
  <div class="post-list">
    <ul>
      <li v-for="post in localPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.abstractText }}</p>
        <a :href="'/posts/' + post.id">阅读全文</a>
        <hr style="height: 3px; background-color:cadetblue;">
        </hr>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useMainStore } from '~/stores/main.ts';

const mainStore = useMainStore();
const localPosts = ref([]);

// 定义获取数据的函数
const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:9999/api/postList');
    localPosts.value = response.data;
    mainStore.setPosts(localPosts.value);
    console.log('获取文章成功:', localPosts.value);
  } catch (error) {
    console.error('获取文章失败:', error);
    // 设置默认的文章数据
    localPosts.value = [
      { id: 1, title: '第一篇文章', abstractText: '这是第一篇文章的摘要。' },
      { id: 2, title: '第二篇文章', abstractText: '这是第二篇文章的摘要。' },
      { id: 3, title: '第三篇文章', abstractText: '这是第三篇文章的摘要。' },
    ];
  }
};

// 在组件挂载时获取数据
onMounted(fetchPosts);

// 如果需要暴露给模板或其他组件使用
defineExpose({ localPosts });
</script>
<style scoped>
.post-list {
  height: 80%;
  overflow-y: auto;
  padding: 10px;
}

p {
  color: #7c7b7c;
}
</style>
