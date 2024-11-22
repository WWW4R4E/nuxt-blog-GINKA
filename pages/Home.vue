<template>
  <div class="blog-home">
    <aside class="sidebar">
      <h2>博客列表</h2>
      <nav>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.text" class="nav-item">
            <router-link class="nav-link" :to="link.to">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="layout">
      <main>
        <section class="article-list">
          <PostList style="flex-grow: 1;" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const navLinks = [
  { text: '首页', to: '/home' },
  { text: '关于', to: '/about' },
  { text: '正文', to: '/contact' },
  { text: '评论', to: '/comments' },
  { text: '新建', to: '/writer' }
];

const isUserLoggedIn = ref(false);



// 在组件加载时设置侧边栏宽度
onMounted(async () => {
  await nextTick();
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    const sidebarWidth = sidebar.offsetWidth;
    document.documentElement.style.setProperty('--sidebar-width', `${40 + 2 * sidebarWidth}px`);
  }
});
</script>

<style scoped>
.blog-home {
  margin: auto;
  padding: 20px;
  padding-left: 60px;
  background-color: #f5f5f5;
  border-radius: 5px;
  min-height: 90vh;
  position: relative;
}

@media (min-width: 768px) {
  .blog-home {
    position: relative;
    width: calc(100vw - var(--sidebar-width));
  }
}

.layout {
  left: 20px;
  flex-wrap: wrap;
  height: 100%;

}

header {
  text-align: center;
  margin-bottom: 20px;
  position: fixed;
  /* 固定顶部导航栏 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* 确保导航栏在其他内容之上 */
  background-color: white;
  /* 防止内容被遮挡 */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加阴影效果 */
}

header h1 {
  margin: 0;
}

header p {
  margin: 0;
}

h1 {
  color: #222;
  font-size: 36px;
}

h2 {
  color: #444;
}

h3 {
  margin: 0;
  color: #e0e0da00;
}

.sidebar {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 200px;
  margin-right: 20px;
  position: fixed;
  /* 固定左侧导航栏 */
  top: 100px;
  /* 与顶部导航栏的底部对齐 */
  left: 70px;
  padding-left: 30px;
  background-color: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(5px);
  bottom: 0;
}

@media (min-width: 768px) {
  .sidebar {
    width: 200px;
    margin-bottom: 0;
  }
}

.nav-links {
  list-style-type: none;
  padding: 0;
}

.nav-item {
  margin: 10px 0;
}

.nav-link {
  text-decoration: none;
  color: #007BFF;
}

.nav-link:hover {
  text-decoration: underline;
}

.article-list {
  padding-left: 20px;
}

main {
  flex: 1;
}

section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

a {
  color: initial;
}

a:hover {
  color: initial;
}

a:visited {
  color: initial;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #35252542;
  padding: 10px 0;
}

p {
  margin: 0;
  color: #7c7b7c;
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
</style>