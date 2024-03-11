<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed:{
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        coachContactLink() {
            return this.$route.path + '/' + this.is + '/contact';
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
            <span
                v-for="area in areas"
                :key="area"
            >
                {{ area }}
            </span>
        </section>

        <section class="actions">
            <RouterLink :to="coachContactLink">
                Contact
            </RouterLink>

            <RouterLink :to="coachDetailedLink">
                View Detail
            </RouterLink>
        </section>
    </li>
</template>

<style scoped src="../../../styles/coach-items.css"></style>
