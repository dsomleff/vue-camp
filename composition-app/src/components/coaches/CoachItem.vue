<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['id', 'firstName', 'lastName', 'rate', 'areas']);

const fullName = computed(() => {
    return props.firstName + ' ' + props.lastName;
});

const coachContactLink = computed(() => {
    return useRoute().path + '/' + props.id + '/contact';
});

const coachDetailedLink = computed(() => {
    return useRoute().path + '/' + props.id;
});
</script>

<template>
    <li>
        <h3>{{ fullName }}</h3>

        <h4>${{ rate }}/hour</h4>

        <section>
            <base-badge
                v-for="area in areas"
                :key="area"
                :type="area"
                :title="area"
            />
        </section>

        <section class="actions">
            <base-button
                link
                mode="outline"
                :to="coachContactLink"
            >
                Contact
            </base-button>

            <base-button
                link
                :to="coachDetailedLink"
            >
                View Detail
            </base-button>
        </section>
    </li>
</template>

<style scoped src="../../../styles/coach-items.css"></style>
