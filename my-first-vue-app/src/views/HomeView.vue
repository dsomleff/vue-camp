<script setup>
    import {useFlash} from "@/composables/useFlash.js";

    let { flash } = useFlash();
</script>

<template>
    <main>
        <button @click="flash('It works')">Click Me</button>
    </main>
</template>
