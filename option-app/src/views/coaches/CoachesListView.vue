<script>
import {useCoachesStore} from '@/stores/coaches/coachesStore.js';
import CoachItem from '@/components/coaches/CoachItem.vue';

export default {
    components: { CoachItem },
    data() {
        return { coachesStore: useCoachesStore() }
    },
    computed: {
        filteredCoaches() {
            return this.coachesStore.getCoaches;
        },
        hasCoaches() {
            return this.coachesStore.hasCoaches;
        }
    }
}
</script>

<template>
    <section>
        FILTER
    </section>

    <section>
        <p class="controls">
            <button>Refresh</button>
            <RouterLink :to="{name: 'register'}">
                Register as Coach
            </RouterLink>
        </p>

        <ul v-if="hasCoaches">
            <coach-item
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
    </section>
</template>

<style scoped src="../../../styles/coaches-list.css"></style>
