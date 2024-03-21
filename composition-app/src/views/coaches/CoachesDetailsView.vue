<script setup>

import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { useCoachesStore } from '@/stores/coaches/coachesStore.js';
import { useRoute } from 'vue-router';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const { getCoaches } = useCoachesStore();
const selectedCoach = getCoaches.find(coach => coach.id === props.id);
const fullName = selectedCoach ? selectedCoach.firstName + ' ' + selectedCoach.lastName : '';
const contactLink = useRoute().path + '/' + props.id + '/contact';
const areas = selectedCoach ? selectedCoach.areas : [];
const rate = selectedCoach ? selectedCoach.hourlyRate : '';
const description = selectedCoach ? selectedCoach.description : '';

</script>

<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>

    <section>
        <base-card>
            <header>
                <h2>Interested? Reach out now</h2>
                <base-button
                    link
                    :to="contactLink"
                >
                    Contact
                </base-button>
            </header>

            <router-view />
        </base-card>
    </section>

    <section>
        <base-card>
            <base-badge
                v-for="area in areas"
                :key="area"
                :type="area"
                :title="area"
            />
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

