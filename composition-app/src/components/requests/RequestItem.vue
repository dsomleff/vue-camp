<script setup>
import { computed } from 'vue';

const props = defineProps(['email', 'message']);

const emailLink = computed(() => 'mailto:' + props.email);
</script>

<template>
    <li>
        <p>
            <a :href="emailLink">{{ email }}</a>
        </p>

        <p>
            {{ message }}
        </p>
    </li>
</template>

<style scoped src="../../../styles/request-item.css"></style>
