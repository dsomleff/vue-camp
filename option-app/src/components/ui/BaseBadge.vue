<script>
export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    computed: {
        text() {
            return this.title.toUpperCase();
        }
    }
}
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
