<script setup lang="ts">


import {ref} from "vue";
// import axios from "axios"
//
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:7788', // 로컬 포트에 맞게 변경
// });
/**
 *  로그인
 */
const loginTest = async () => {
  console.log("ttttt")
  const res = await fetch("/api/user/v1/loginApi_login");
  console.log(res);

}


</script>

<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Web Push - login</title>
<!--    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />-->
<!--    <link rel="stylesheet" href="/css/common.css">-->
  </head>
  <body>
  <header>
    <h1>Web Push</h1>
    <a href="https://github.com/leegeunhyeok/web-push" target="_blank">
      <span class="github"></span>
    </a>
  </header>
  <main>
    <section>
      <h2>👋 Login</h2>
      <div class="group">
        <input class="fill" id="user_id" type="text" placeholder="User ID">
        <button @click="loginTest">Go!</button>
      </div>
    </section>
  </main>
  </body>
</template>

<style lang="scss">
</style>