<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    components: {TheHeader},
}
</script>

<template>
    <the-header />

    <RouterView />
</template>

<style src="../styles/app.css"></style>
