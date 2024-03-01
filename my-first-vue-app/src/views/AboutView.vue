<script setup>
    import {useFlash} from "@/composables/useFlash.js";

    let { flash } = useFlash();
</script>

<template>
    <div class="about">
        <p>
            <button @click="flash('It works')">Click Me</button>
        </p>
    </div>
</template>
