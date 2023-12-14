// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    /**
     * Server side rendering 사용 안함
     * */
    ssr : false,

    app: {
      head: {
        htmlAttrs : {
          lang : "ko",
        },
        title: "webPush",
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1",
        meta: [
          { name: "description", content: "" },
          { "http-equiv" : "X-UA-Compatible", content : "IE=edge,chrome=1" },
          { "http-equiv" : "pragma", content : "no-cache" },
          { "http-equiv" : "cache-control", content : "no-cache" },
          { "http-equiv" : "expires", content : "0" },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ]
      }
    },

    enabled: true ,
    proxy : {
      proxies : {
        "/api" : "http://localhost:7788",
      }
    },
    // proxy: {
    //   proxies: {
    //     '/api/': {
    //       target: 'http://localhost:7788',
    //       changeOrigin: true,
    //     },
    //   },
    // },
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

    //...
    build: {
      loaders: {
        css: {
          modules: false // CSS 파일을 모듈로 처리하지 않도록 설정
        }
      }
    },
  },


})
