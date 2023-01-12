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
import { GET_TOKEN_URL } from '@/constants/authentication';
import { decrypt, getConsumerKey, getSecretKey, getTokenRequestHeader } from '@/functions/authentication';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { AuthenticateState } from './Authenticate.types';

const route = useRoute();
const router = useRouter();

const state = reactive<AuthenticateState>({ 
    password: "",
    show: false,
});

const authenticate = () => {
    console.log(GET_TOKEN_URL);
    console.log(state.password)
    console.log("grant_type=authorization_code&redirect_uri=oob&code=" + route.query.code + "&client_id=" + getConsumerKey() + "&client_secret=" + decrypt(getSecretKey(), state.password))
    fetch(GET_TOKEN_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            Authorization: "Basic " + getTokenRequestHeader(state.password),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "grant_type=authorization_code&redirect_uri=oob&code=" + route.query.code + "&client_id=" + getConsumerKey() + "&client_secret=" + decrypt(getSecretKey(), state.password)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => {
        console.log(err);
        router.push("/")
    })
};

onMounted(() => {
    console.log(route.query.code);
    if (!route.query.code) router.push("/")
});

</script>
<style scoped></style>