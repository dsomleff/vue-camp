<script>
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
    components: {BaseCard},
    emits: ['change-filters'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            }
        }
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;

            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };

            this.filters = updatedFilters;
            this.$emit('change-filters', updatedFilters);
        }
    }
}
</script>

<template>
    <base-card>
        <h2>Find your Coach</h2>

        <span class="filter-option">
            <label for="frontend">Frontend</label>
            <input
                id="frontend"
                type="checkbox"
                checked
                @change="setFilter"
            >
        </span>

        <span class="filter-option">
            <label for="backend">Backend</label>
            <input
                id="backend"
                type="checkbox"
                checked
                @change="setFilter"
            >
        </span>

        <span class="filter-option">
            <label for="career">Career</label>
            <input
                id="career"
                type="checkbox"
                checked
                @change="setFilter"
            >
        </span>
    </base-card>
</template>

<style scoped src="../../../styles/coach-filter.css"></style>
