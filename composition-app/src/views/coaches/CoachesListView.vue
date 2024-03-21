<script setup>
import { useCoachesStore } from '@/stores/coaches/coachesStoreOld.js';
import CoachItem from '@/components/coaches/CoachItem.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';
import { useFilteredCoaches } from '@/views/coaches/_hooks/useFilteredCoaches.js';

const coachesStore = useCoachesStore();

const { filteredCoaches, hasCoaches, setFilters } = useFilteredCoaches(coachesStore);

</script>

<template>
    <section>
        <CoachFilter @change-filters="setFilters" />
    </section>

    <section>
        <BaseCard>
            <p class="controls">
                <BaseButton
                    link
                    to="/register"
                >
                    Register as Coach
                </BaseButton>
            </p>

            <ul v-if="hasCoaches">
                <CoachItem
                    v-for="coach in filteredCoaches"
                    :id="coach.id"
                    :key="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                />
            </ul>

            <h3 v-else>
                No Coaches Found
            </h3>
        </BaseCard>
    </section>
</template>

<style scoped src="../../../styles/coaches-list.css"></style>
