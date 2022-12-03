<template>
    <div class="wrapper">
        <div class="form">
            <h1>Enter a New Encryption Secret</h1>
            <v-text-field
                v-model="state.secret"
                :append-inner-icon="state.show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.show ? 'text' : 'password'"
                name="secret"
                label="AES Secret"
                @click:append-inner="toggle()"
                placeholder="New Secret"
                variant="outlined"
                ref="secretInput"
            ></v-text-field>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';

export default {
    setup() {
        const state = reactive({ 
            show: false,
            secret: ""
        });

        const secretInput = ref(new HTMLElement());

        const toggle = () => {
            state.show = !state.show;
            if (secretInput.value) {
                secretInput.value.blur();
            }
        };

        return { state, toggle, secretInput };
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.form {
    padding: 20px;
    border-radius: 4px;
    width: 70%;
    min-width: 160px;
    background-color: #2b2b2b;
    text-align: center;
}
h1 {
    margin: 20px 0px 20px 0px;
}
</style>
