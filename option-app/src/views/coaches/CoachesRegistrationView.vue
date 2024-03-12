<script>
import RegistrationForm from '@/components/coaches/RegistrationForm.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import {useCoachesStore} from '@/stores/coaches/coachesStore.js';

export default {
    components:{
        BaseCard,
        RegistrationForm,
    },
    data() {
        return {
            coachStore: useCoachesStore(),
        }
    },
    methods: {
        saveData(data) {
            this.coachStore.registerCoach(data);
            this.$router.replace('/coaches');
        }
    }
}
</script>
<template>
    <section>
        <base-card>
            <h2>Register as a Coach</h2>

            <registration-form @save-data="saveData" />
        </base-card>
    </section>
</template>
