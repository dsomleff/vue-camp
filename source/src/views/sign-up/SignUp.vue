<script setup>
import { computed, reactive } from 'vue';
import axios from 'axios';

const formState = reactive({
    username: '',
    email: '',
    password: '',
    passwordRepeat: ''
});

const isDisabled = computed(() => {
    return formState.password !== formState.passwordRepeat
        || !formState.password
        || !formState.passwordRepeat;
});

const submit = () => {
    // eslint-disable-next-line no-unused-vars
    const {passwordRepeat, ...body} = formState;
    axios.post('/api/v1/users', body);
}
</script>

<template>
    <h1>Sign Up</h1>

    <form @submit.prevent="submit">
        <p>
            <label for="username">Username </label>
            <input
                id="username"
                v-model="formState.username"
            >
        </p>

        <p>
            <label for="email">E-Mail </label>
            <input
                id="email"
                v-model="formState.email"
            >
        </p>

        <p>
            <label for="password">Password </label>
            <input
                id="password"
                v-model="formState.password"
                type="password"
            >
        </p>

        <p>
            <label for="passwordRepeat">Password Repeat </label>
            <input
                id="passwordRepeat"
                v-model="formState.passwordRepeat"
                type="password"
            >
        </p>

        <button
            :disabled="isDisabled"
        >
            SignUp
        </button>
    </form>
</template>
