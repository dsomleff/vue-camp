<script setup>
    import {useFlash} from "@/composables/useFlash.js";
    import {counter} from "@/stores/counterStore.js";

    let { flash } = useFlash();
</script>

<template>
    <div class="about">
        <p>
            The current count is {{counter.count}}
            <button @click="flash('It works')">Click Me</button>
        </p>
    </div>
</template>
