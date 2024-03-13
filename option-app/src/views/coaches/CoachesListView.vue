<script>
import { useCoachesStore } from '@/stores/coaches/coachesStoreOld.js';
import CoachItem from '@/components/coaches/CoachItem.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

export default {
    components: { CoachFilter, BaseButton, BaseCard, CoachItem },
    data() {
        return {
            coachesStore: useCoachesStore(),
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches =  this.coachesStore.getCoaches;

            return coaches.filter(coach => {
                for (const area in this.activeFilters) {
                    if (this.activeFilters[area] && coach.areas.includes(area))
                        return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return this.coachesStore.hasCoaches;
        }
    },
    methods: {
        setFilters(updatedFilters) {
            return this.activeFilters = updatedFilters;
        }
    }
}
</script>

<template>
    <section>
        <coach-filter @change-filters="setFilters" />
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
