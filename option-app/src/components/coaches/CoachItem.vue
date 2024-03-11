<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';

export default {
    components: { BaseBadge, BaseButton },
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed:{
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        coachContactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },

        coachDetailedLink() {
            return this.$route.path + '/' + this.id;
        }
    }
}
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
