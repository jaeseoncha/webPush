<script setup lang="ts">

import { ref, computed } from "vue";

const { $axios } = useNuxtApp();
const router = useRouter();


interface LoginProps {
    /**
     * 로그인 active tab 설정
     */
    activeTab? : string,
}

const props = withDefaults(defineProps<LoginProps>(), {
   activeTab   : "",
});

const isUser = ref( false );

</script>

<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Web Push</title>
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
    <link rel="stylesheet" href="/css/common.css">
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
      <h2>👀 Status</h2>
      <div class="item">
        Current User ID: <u><p class="inline" id="current_user_id"></p></u>
      </div>
      <div class="item">
        ServiceWorker registered: <p class="inline" id="registration_status"></p>
        <br>
        Push Support: <p class="inline" id="push_support_status"></p>
        <br>
        Notification permission: <p class="inline" id="notification_permission_status"></p>
      </div>
      <div class="item">
        <pre id="subscription"></pre>
      </div>
    </section>
    <section>
      <h2>👉 Subscribe</h2>
      <div class="item">
        <button onclick="subscribe()">Subscribe</button>
        <button onclick="unsubscribe()">Unsubscribe</button>
      </div>
    </section>
    <section>
      <h2>🚀 Send Push Notification</h2>
      <div class="item">
        <input type="text" id="message" value="Hello, World!">
      </div>
      <div class="item group">
        <input class="fill" type="text" id="target_user_id" placeholder="Target User ID">
        <button onclick="sendPushNotification()">Send</button>
      </div>
      <div class="item">
        <p class="inline secondary" id="send_status">-</p>
      </div>
    </section>
    <section>
      <h2>🔥 Logout</h2>
      <div class="item">
        <button onclick="logout()">Logout</button>
      </div>
    </section>
  </main>
  </body>
</template>

