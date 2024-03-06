<template>
    <h1>Sign Up</h1>

    <p>
        <label for="username">Username </label>
        <input
            id="username"
            v-model="username"
        >
    </p>

    <p>
        <label for="email">E-Mail </label>
        <input
            id="email"
            v-model="email"
        >
    </p>

    <p>
        <label for="password">Password </label>
        <input
            id="password"
            v-model="password"
            type="password"
        >
    </p>

    <p>
        <label for="passwordRepeat">Password Repeat </label>
        <input
            id="passwordRepeat"
            v-model="passwordRepeat"
            type="password"
        >
    </p>

    <button
        :disabled="isDisabled"
        @click="submit"
    >
        SignUp
    </button>
</template>

<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';

let username = ref('');
let email = ref('');
let password = ref('');

let passwordRepeat = ref('');

const isDisabled = computed(() => {
    return password.value !== passwordRepeat.value || !password.value || !passwordRepeat.value;
});

const submit = () => {
    axios.post('/api/v1/users', {
        username: username.value,
        email: email.value,
        password: password.value
    })
}
</script>
