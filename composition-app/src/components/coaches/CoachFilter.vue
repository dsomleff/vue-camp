<script setup>
import BaseCard from '@/components/ui/BaseCard.vue';
import { ref } from 'vue';

const filters = ref({
    frontend: true,
    backend: true,
    career: true,
});

const setFilter = event => {
    const inputId = event.target.id;
    const isActive = event.target.checked;

    const updatedFilters = {
        ...filters.value,
        [inputId]: isActive
    };

    filters.value = updatedFilters;
    emit('change-filters', updatedFilters);
}

</script>

<template>
    <BaseCard>
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
    </BaseCard>
</template>

<style scoped src="../../../styles/coach-filter.css"></style>
