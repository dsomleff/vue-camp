<script>
import RegistrationForm from '@/components/coaches/RegistrationForm.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
    components:{ BaseCard, RegistrationForm}
}
</script>
<template>
    <section>
        <base-card>
            <h2>Register as a Coach</h2>

            <registration-form />
        </base-card>
    </section>
</template>
