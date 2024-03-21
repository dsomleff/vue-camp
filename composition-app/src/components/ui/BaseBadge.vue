<script setup>

import {computed} from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
});

const text = computed(() => {
    return props.title.toUpperCase();
})
</script>

<template>
    <span
        class="badge"
        :class="type"
    >
        {{ text }}
    </span>
</template>

<style scoped src="../../../styles/base-badge.css"></style>
