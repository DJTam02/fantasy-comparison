<!-- eslint-disable prettier/prettier -->
<template>
  <v-text-field
    v-model="state.password"
    :append-icon="state.show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="state.show ? 'text' : 'password'"
    name="password"
    label="Password"
    @click:append="state.show = !state.show"
    placeholder="Password"
    variant="outlined"
  ></v-text-field>
  <button @click="authenticate">Submit</button>
</template>
<script lang="ts" setup>
import { GET_TOKEN_URL, REDIRECT_URI, VERIFIER_KEY_NAME } from "@/constants/authentication";
import {
  decrypt,
  getConsumerKey,
  getSecretKey,
  getTokenRequestHeader,
} from "@/functions/authentication";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { AuthenticateState } from "./Authenticate.types";

const route = useRoute();
const router = useRouter();

const state = reactive<AuthenticateState>({ password: "", show: false });
const authenticate = () => {
  console.log(GET_TOKEN_URL);
  console.log(state.password);
  console.log("grant_type=authorization_code&redirect_uri=oob&code=" + route.query.code + "&client_id=" + getConsumerKey() + "&client_secret=" + decrypt(getSecretKey(), state.password))
  const reqBody: any = {
      'grant_type': 'authorization_code',
      'redirect_uri': REDIRECT_URI,
      code: route.query.code?.toString() ?? "",
      'client_id': getConsumerKey(),
      'client_secret': decrypt(getSecretKey(), state.password),
      'Authorization': "Basic " + getTokenRequestHeader(state.password)
  };
  console.log(Object.keys(reqBody).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(reqBody[key as keyof typeof reqBody])).join('&'));
  fetch("https://q3qcnfhw9c.execute-api.us-east-2.amazonaws.com/Test/proxy", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
      //body: Object.keys(reqBody).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(reqBody[key as keyof typeof reqBody])).join('&'),
      //body: "grant_type=authorization_code&redirect_uri=oob&code=" + route.query.code + "&client_id=" + getConsumerKey() + "&client_secret=" + decrypt(getSecretKey(), state.password)
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => {
      console.log(err);
      router.push("/");
  })
  // console.log(route.query.code);
  // var myHeaders = new Headers();
  // //myHeaders.append("Authorization", "Basic ZGoweUptazlURTgwYUdVMVNFdEdOak5CSm1ROVdWZHJPVlpWWkZwTk1IUnFXbGRyYldOSGJ6bE5RVDA5Sm5NOVkyOXVjM1Z0WlhKelpXTnlaWFFtYzNZOU1DWjRQVGd5OjczZDJiNzI2ZjU0MGU1OTE1YjAwNmY4NTc2ZjYyNzAwZTJmMTFmNGY=");
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  // //myHeaders.append("Access-Control-Allow-Origin", "*")

  // var raw =
  //   "grant_type=authorization_code&redirect_uri=oob&code=" +
  //   route.query.code +
  //   "&client_id=" +
  //   getConsumerKey() +
  //   "&code_verifier=" +
  //   sessionStorage.getItem(VERIFIER_KEY_NAME);
  // console.log(raw);
  // var requestOptions: any = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };

  // fetch(
  //   "https://proxy.cors.sh/https://api.login.yahoo.com/oauth2/get_token",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
};

onMounted(() => {
  console.log(route.query.code);
  if (!route.query.code) router.push("/");
});
</script>
<style scoped></style>
