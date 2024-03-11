<script>
import { useCoachesStore } from '@/stores/coaches/coachesStore.js';
import CoachItem from '@/components/coaches/CoachItem.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    components: { BaseButton, BaseCard, CoachItem },
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
        <base-card>
            <p class="controls">
                <base-button mode="outline">
                    Refresh
                </base-button>

                <base-button
                    link
                    to="/register"
                >
                    Register as Coach
                </base-button>
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
        </base-card>
    </section>
</template>

<style scoped src="../../../styles/coaches-list.css"></style>
