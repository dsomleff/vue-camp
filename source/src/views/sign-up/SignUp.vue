<template>
    <h1>Sign Up</h1>

    <p>
        <label for="username">Username </label>
        <input id="username">
    </p>

    <p>
        <label for="username">Mail </label>
        <input id="email">
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

    <button :disabled="isDisabled">
        SignUp
    </button>
</template>

<script setup>
import { computed, ref } from 'vue';

/** @type {Ref<UnwrapRef<string>>} */
let password = ref('');

/** @type {Ref<UnwrapRef<string>>} */
let passwordRepeat = ref('');

/** @type {ComputedRef<boolean>} */
const isDisabled = computed(() => {
    return password.value !== passwordRepeat.value || !password.value || !passwordRepeat.value;
});
</script>
