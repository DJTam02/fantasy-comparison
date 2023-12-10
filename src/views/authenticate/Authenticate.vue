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
import {
  fetchToken,
} from "@/functions/authentication";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { AuthenticateState } from "./Authenticate.types";

const route = useRoute();
const router = useRouter();

const state = reactive<AuthenticateState>({ password: "", show: false });
const authenticate = () => {
  fetchToken(state.password, 'authorization_code', "", route.query.code?.toString() ?? "")
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
        console.log(err);
        router.push("/");
    });
};

onMounted(() => {
  console.log(route.query.code);
  if (!route.query.code) router.push("/");
});
</script>
<style scoped></style>
