<template>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required autocomplete="username" />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required autocomplete="current-password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// 表单数据
const username = ref('');
const password = ref('');
const router = useRouter();
const store = useStore();

// 登录方法
async function login() {
  try {
    const response = await fetch('http://localhost:9999/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || '登录失败');
    }
    store.commit('setAuthentication', true);
    router.push('/home');
  } catch (error) {
    console.error("登录过程中出现错误:", error);
    // 额外的错误处理，比如提示用户
  }
}
</script>

<style scoped>
/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #0056b3;
}
</style>