<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { useCoachesStore } from '@/stores/coaches/coachesStore.js';

export default {
    components: {BaseCard, BaseButton, BaseBadge},
    props: ['id'],
    data() {
        return {
            selectedCoach: null,
            coachesStore: useCoachesStore()
        };
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate(){
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        }
    },
    created() {
        this.selectedCoach = this.coachesStore.getCoaches.find(coach => coach.id === this.id);
    }
}
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

