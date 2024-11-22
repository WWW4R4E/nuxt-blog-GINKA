<template>
  <header style="height: 20%;">
    <div id="top_nav" class="navbar border-none">
      <nav id="nav_main" class="navbar-main">
        <ul id="nav_left" class="navbar-list navbar-left">
          <a title="嗨喽" role="banner" href="/user">
            <img class="icon" src="../assets/icon.jpg" alt="图标">
          </a>
          <li>
            <a v-for="link in externalLinks" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
        <h1>博客首页 | 新的开始</h1>
        <p>这是基于<strong>vue3和springboot3</strong>的博客系统。</p>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/stores/main';

const mainStore = useMainStore();
const { posts } = storeToRefs(mainStore);

const getRandomPostId = () => {
  const minPostId = 1;
  const maxPostId = posts.value.length;
  return Math.floor(Math.random() * (maxPostId - minPostId + 1)) + minPostId;
};

const externalLinks = computed(() => [
  { text: '随机看文', href: `/posts/${getRandomPostId()}` },
  { text: '排行榜', href: 'https://news.cnblogs.com/' },
  { text: '收藏', href: 'https://q.cnblogs.com/' },
]);

</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

header {
  text-align: center;
  box-shadow: 0 2px 4px rgba(194, 193, 193, 0.1);
  /* 添加阴影效果 */
}

header h1 {
  margin: 0;
  font-size: 24px;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin-right: 10px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
}

.navbar-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.6);
}

.navbar-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.navbar-list li {
  margin: 0 15px;
}

.navbar-list a {
  text-decoration: none;
  color: #333;
  padding: 10px;
}

.navbar-list a:hover {
  color: #007BFF;
}

img.icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>