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
그렇죠
</template>

<style lang="scss">
</style>