<script>
import {useCoachesStore} from '@/stores/coaches/coachesStore.js';

export default {
    name: 'PokemonDetails',
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
            <li
                v-for="coach in filteredCoaches"
                :key="coach.id"
            >
                {{ coach.firstName }}
            </li>
        </ul>

        <h3 v-else>
            No Coaches Found
        </h3>
    </section>
</template>
