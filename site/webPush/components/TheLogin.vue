<script setup lang="ts">


import {ref} from "vue";
// import {useRoute} from "vue-router";
// import {useNuxtApp, useRouter} from "nuxt/app";
import {useNuxtApp, useRoute,useRouter} from "#app";

import axios from 'axios'


/**
 *  로그인
 */
const loginTest = () => {
  console.log("ttttt")
  // const res = await $axios.post("/api")
  // return res.data || {};
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