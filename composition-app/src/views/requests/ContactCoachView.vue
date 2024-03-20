<script setup>

import { reactive } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { submitForm } from '@/views/requests/_services/ContactCoachService.js';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const formErrors = reactive({});

const formData = reactive({
    email: '',
    message: ''
});

const handleSubmitForm = () => {
    submitForm(formData, formErrors, route, router);
}

</script>

<template>
    <form @submit.prevent="handleSubmitForm">
        <p class="form-control">
            <label for="email">Your E-mail</label>
            <input
                id="email"
                v-model.trim="formData.email"
                type="email"
            >
            <span
                v-if="formErrors.email"
                class="errors"
            >{{ formErrors.email }}</span>
        </p>

        <p class="form-control">
            <label for="message">Message</label>
            <textarea
                id="message"
                v-model.trim="formData.message"
                rows="5"
            />
            <span
                v-if="formErrors.message"
                class="errors"
            >{{ formErrors.message }}</span>
        </p>

        <p class="actions">
            <BaseButton>Send Message</BaseButton>
        </p>
    </form>
</template>

<style scoped src="../../../styles/contact-coach.css"></style>

