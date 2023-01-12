<template>
    <div class="wrapper">
        <div class="block" v-show="state.page === 'start'">
            <button class="button" @click="setPage('encrypt')">Encrypt New Secret</button>
            <button class="button" :disabled="!getSecretKey()" @click="setPage('decrypt')">Decrypt Current Secret</button>
            <button class="button" :disabled="!getSecretKey()" @click="setPage('reencrypt')">Re-encrypt Current Secret</button>
        </div>
        <div class="block" v-show="state.page === 'result' && state.currentSecret">
            <p class="key-show">{{ state.currentSecret }}</p>
            <button class="small-button" @click="router.push('/')">Return to Home</button>
        </div>
        <div class="block" v-show="state.page === 'encrypt'">
            <h1>Encrypt New Secret</h1>
            <v-text-field
                v-model="state.secret.value"
                :append-icon="state.secret.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.secret.show ? 'text' : 'password'"
                name="secret"
                label="Secret"
                @click:append="state.secret.show = !state.secret.show"
                placeholder="New Secret"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="state.newPassword.value"
                :append-icon="state.newPassword.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.newPassword.show ? 'text' : 'password'"
                name="newPassword"
                label="Encryption Password"
                @click:append="state.newPassword.show = !state.newPassword.show"
                placeholder="Encryption Password"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="state.newPasswordConfirm.value"
                :append-icon="state.newPasswordConfirm.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.newPasswordConfirm.show ? 'text' : 'password'"
                name="newPasswordConfirm"
                label="Confirm Encryption Password"
                @click:append="state.newPasswordConfirm.show = !state.newPasswordConfirm.show"
                placeholder="Confirm Encryption Password"
                variant="outlined"
            ></v-text-field>
            <div class="button-container">
                <button class="small-button" @click="back">Back</button>
                <button 
                    class="small-button" 
                    :disabled="!state.secret.value || !state.newPassword.value || state.newPassword.value !== state.newPasswordConfirm.value" 
                    @click="encryptSubmit"
                >Submit</button>
            </div>
        </div>
        <div class="block" v-show="state.page === 'decrypt'">
            <v-text-field
                v-model="state.newPassword.value"
                :append-icon="state.newPassword.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.newPassword.show ? 'text' : 'password'"
                name="newPassword"
                label="Encryption Password"
                @click:append="state.newPassword.show = !state.newPassword.show"
                placeholder="Encryption Password"
                variant="outlined"
            ></v-text-field>
            <div class="button-container">
                <button class="small-button" @click="back">Back</button>
                <button class="small-button" :disabled="!state.newPassword.value" @click="decryptSubmit">Submit</button>
            </div>
        </div>
        <div class="block" v-show="state.page === 'reencrypt'">
            <v-text-field
                v-model="state.oldPassword.value"
                :append-icon="state.oldPassword.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.oldPassword.show ? 'text' : 'password'"
                name="oldPassword"
                label="Old Encryption Password"
                @click:append="state.oldPassword.show = !state.oldPassword.show"
                placeholder="Old Encryption Password"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="state.newPassword.value"
                :append-icon="state.newPassword.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.newPassword.show ? 'text' : 'password'"
                name="newPassword"
                label="New Encryption Password"
                @click:append="state.newPassword.show = !state.newPassword.show"
                placeholder="New Encryption Password"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="state.newPasswordConfirm.value"
                :append-icon="state.newPasswordConfirm.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.newPasswordConfirm.show ? 'text' : 'password'"
                name="newPasswordConfirm"
                label="Confirm Encryption Password"
                @click:append="state.newPasswordConfirm.show = !state.newPasswordConfirm.show"
                placeholder="Confirm Encryption Password"
                variant="outlined"
            ></v-text-field>
            <div class="button-container">
                <button class="small-button" @click="back">Back</button>
                <button 
                    class="small-button" 
                    :disabled="!state.oldPassword.value || !state.newPassword.value || state.newPassword.value !== state.newPasswordConfirm.value" 
                    @click="reencryptSubmit"
                >Submit</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { decrypt, encrypt, getSecretKey } from '@/functions/authentication';
import { reactive, type UnwrapNestedRefs } from 'vue';
import type { ChangeSecretState } from './ChangeSecret.types';
import { useRouter } from 'vue-router';

const router = useRouter();

const state: UnwrapNestedRefs<ChangeSecretState> = reactive({ 
    page: "start",
    secret: { value: "", show: false },
    oldPassword: { value: "", show: false },
    newPassword: { value: "", show: false },
    newPasswordConfirm: { value: "", show: false },
    currentSecret: ""
});

const setPage = (page: string) => {
    state.page = page;
};

const encryptSubmit = () => {
    state.currentSecret = encrypt(state.secret.value, state.newPassword.value);
    state.page = "result";
};

const decryptSubmit = () => {
    state.currentSecret = decrypt(getSecretKey(), state.newPassword.value);
    state.page = "result";
};

const reencryptSubmit = () => {
    state.currentSecret = encrypt(decrypt(getSecretKey(), state.oldPassword.value), state.newPassword.value);
    state.page = "result";
};

const back = () => {
    state.page = "start";
    state.secret = { value: "", show: false };
    state.oldPassword = { value: "", show: false };
    state.newPassword = { value: "", show: false };
    state.newPasswordConfirm = { value: "", show: false };
    state.currentSecret = "";
};
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.block {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 70%;
    min-width: 160px;
    background-color: #2b2b2b;
    text-align: center;
    max-width: 600px;
}
.block > *:last-child {
    margin-bottom: 0px;
}
.block > * {
    margin-bottom: 20px;
    flex: 1;
}
.button {
    padding: 20px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 20px;
    transition: 0.25s;
    color: white;
}
.button:enabled:hover {
    border: 1px solid white;
}
.button:disabled {
    color: grey;
    cursor: not-allowed;
}
.small-button {
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 20px;
    transition: 0.25s;
    padding: 10px 30px;
    color: white;
}
.small-button:enabled:hover {
    border: 1px solid white;
}
.small-button:disabled {
    color: grey;
    cursor: not-allowed;
}
.button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.key-show {
    overflow-wrap: anywhere;
}
</style>
