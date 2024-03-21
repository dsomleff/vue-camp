<script setup>
import RegistrationForm from '@/components/coaches/RegistrationForm.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import { useCoachRegistration } from '@/views/coaches/_hooks/useCoachRegistration.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const { saveData } = useCoachRegistration(router);
</script>

<template>
    <section>
        <BaseCard>
            <h2>Register as a Coach</h2>

            <RegistrationForm @save-data="saveData" />
        </BaseCard>
    </section>
</template>
