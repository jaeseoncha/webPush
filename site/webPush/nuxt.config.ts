// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    /**
     * Server side rendering 사용 안함
     * */
    ssr : false,

    enabled: true ,
    proxy : {
      proxies : {
        "/api" : "http://localhost:7788",
      }
    },
    /**
     * 타입스크립트 설정
     * */
    typescript : {
      strict : true,

      includeWorkspace : false,

      /**
       * build-time type checking을 활성화합니다.
       * 성능상의 이유로 기본적으로 꺼져있으며 이 설정을 키려면 아래 모듈을 설치해야 합니다.
       * `typescript` and `vue-tsc`
       * */
      typeCheck : false,

      shim : true
    },

  },


})
