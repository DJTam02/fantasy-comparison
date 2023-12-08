<!-- eslint-disable prettier/prettier -->
<template>
    <button @click="authenticate">Authenticate</button>
</template>
<script lang="ts" setup>
import {
  ACCESS_TOKEN_COOKIE,
  HASH_METHOD,
  REDIRECT_URI,
  REFRESH_TOKEN_COOKIE,
  REQUEST_AUTH_URL,
  VERIFIER_KEY_NAME,
} from "@/constants/authentication";
import { useRouter } from "vue-router";
import { inject, onMounted, reactive } from "vue";
import type { VueCookies } from "vue-cookies";
import {
  getConsumerKey,
  getCodeVerifier,
  getCodeChallenge,
decrypt,
getSecretKey,
} from "@/functions/authentication";

const $cookies = inject<VueCookies>("$cookies");
const router = useRouter();

const state = reactive({
  isAuthenticated:
    $cookies?.get(REFRESH_TOKEN_COOKIE) && $cookies.get(ACCESS_TOKEN_COOKIE),
});

const authenticate = () => {
    console.log(REQUEST_AUTH_URL + "?response_type=code&redirect_uri=" + encodeURIComponent(REDIRECT_URI) + "&client_id=" + getConsumerKey())
    const params = "response_type=code&redirect_uri=" + encodeURIComponent(REDIRECT_URI) + "&client_id=" + getConsumerKey();
  // const verifier = getCodeVerifier();
  // console.log(verifier);
  // sessionStorage.setItem(VERIFIER_KEY_NAME, verifier);
  window.location.href =
    REQUEST_AUTH_URL +
    "?response_type=code&redirect_uri=" +
    encodeURIComponent(REDIRECT_URI) +
    "&client_id=" +
     getConsumerKey() //+
    // "&code_challenge=" +
    // getCodeChallenge(verifier) +
    // "&code_challenge_method=" +
    // HASH_METHOD;
    // fetch(REQUEST_AUTH_URL + "?" + params, {
    //     method: 'GET',
    //     redirect: "follow",
    //     mode: 'no-cors'
    // })
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err));
};

onMounted(() => {
  if (!state.isAuthenticated) return;
});
</script>
<style scoped></style>
