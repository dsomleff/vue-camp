<script setup>
    import {useFlash} from "@/composables/useFlash.js";
    import {useStorage} from "@/composables/useStorage.js";

    let { flash } = useFlash();
    let food = useStorage('food');
    let age = useStorage('age');
</script>

<template>
    <main>
        <button @click="flash('It works')">Click Me</button>
        <p>
            What is your favorite food?
            <input type="text" v-model="food" >
        </p>

        <p>
            How old are you?
            <input type="text" v-model="age">
        </p>
    </main>
</template>
