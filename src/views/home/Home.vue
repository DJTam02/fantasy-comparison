<template>
    <button @click="authenticate">Authenticate</button>
</template>
<script lang="ts" setup>
import { ACCESS_TOKEN_COOKIE, HASH_METHOD, REDIRECT_URI, REFRESH_TOKEN_COOKIE, REQUEST_AUTH_URL } from '@/constants/authentication';
import { useRouter } from 'vue-router';
import { inject, onMounted, reactive } from 'vue';
import type { VueCookies } from 'vue-cookies';
import { getConsumerKey, getHashedCodeVerifier } from '@/functions/authentication';

const $cookies = inject<VueCookies>('$cookies');
const router = useRouter();

const state = reactive({
    isAuthenticated: $cookies?.get(REFRESH_TOKEN_COOKIE) && $cookies.get(ACCESS_TOKEN_COOKIE)
});

const authenticate = () => {
    console.log(REQUEST_AUTH_URL + "?response_type=code&redirect_uri=" + encodeURIComponent(REDIRECT_URI) + "&client_id=" + getConsumerKey())
    window.location.href = REQUEST_AUTH_URL + 
    "?response_type=code&redirect_uri=" + encodeURIComponent(REDIRECT_URI) + 
    "&client_id=" + getConsumerKey() + 
    "&code_challenge=" + getHashedCodeVerifier() +
    "&code_challenge_method=" + HASH_METHOD
};

onMounted(() => {
    if (!state.isAuthenticated) return;

});
</script>
<style scoped>
</style>