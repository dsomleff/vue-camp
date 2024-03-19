<script>
export default {
    props: {
        link: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            default: '/'
        },
        mode: {
            type: String,
            default: null,
        }
    }
}
</script>

<template>
    <button
        v-if="!link"
        :class="mode"
    >
        <slot />
    </button>

    <RouterLink
        v-else
        :to="to"
        :class="mode"
    >
        <slot />
    </RouterLink>
</template>

<style scoped src="../../../styles/base-button.css"></style>
