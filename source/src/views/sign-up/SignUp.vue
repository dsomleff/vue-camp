<template>
    <h1>Sign Up</h1>

    <p>
        <label for="username">Username</label>
        <input id="username">
    </p>

    <p>
        <label for="username">Mail</label>
        <input id="email">
    </p>

    <p>
        <label for="password">Password</label>
        <input id="password" type="password" @input="onChangePassword">
    </p>

    <p>
        <label for="passwordRepeat">Password Repeat</label>
        <input id="passwordRepeat" type="password" @input="onChangePasswordRepeat">
    </p>

    <button :disabled="disabled">SignUp</button>
</template>

<script setup>
    import {ref} from 'vue';

    let disabled = ref(false);
    let password = ref('');
    let passwordRepeat = ref('');

    const onChangePassword = (e) => {
        password.value = e.target.value;
        disabled.value = password.value !== passwordRepeat.value
    }

    const onChangePasswordRepeat = (e) => {
        passwordRepeat.value = e.target.value;
        disabled.value = password.value !== passwordRepeat.value
    }
</script>
