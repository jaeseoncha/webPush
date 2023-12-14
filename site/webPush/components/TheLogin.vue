<script setup lang="ts">


import {ref} from "vue";
// import axios from "axios"
//
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:7788', // 로컬 포트에 맞게 변경
// });

const userId = ref("");

/**
 *  로그인
 */
const loginTest = async () => {

  const userData = {
    userId: userId,
  };

  // fetch를 사용하여 POST 요청을 보냅니다.
  const response = await fetch('/api/user/v1/loginApi_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // 요청의 Content-Type을 JSON으로 설정합니다.
    },
    body: JSON.stringify(userData) // 사용자 데이터 객체를 문자열로 변환하여 요청의 본문에 넣습니다.
  });

  // 서버로부터 받은 응답을 JSON 형태로 파싱합니다.
  const data = await response.json();

  // 응답 데이터를 확인합니다.
  console.log(data);

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
        <v-text-field
            v-model="userId"
            label="사용자명"></v-text-field>
        <button @click="loginTest">Go!</button>
      </div>
    </section>
  </main>
  </body>

</template>
