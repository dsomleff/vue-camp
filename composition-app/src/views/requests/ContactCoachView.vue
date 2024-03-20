<script setup>

import { reactive } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { ContactCoachSchema } from '@/schemas/ContactCoachSchema.js';
import { useRequestsStore } from '@/stores/requests/requestsStore.js';
import { handleFormErrors } from '@/utils/handleFormErrors.js';
import { useRouter, useRoute } from 'vue-router';

const requestStore = useRequestsStore();
const router = useRouter();
const route = useRoute();

const formData = reactive({
    email: '',
    message: ''
});

const formErrors = reactive({});


function submitForm() {
    const errors = handleFormErrors(
        formData,
        ContactCoachSchema
    );

    if (errors) {
        Object.assign(formErrors, errors);
    } else {
        requestStore.contactCoach({
            coachId: route.params.id,
            email: formData.email,
            message: formData.message
        });

        router.replace('/coaches');
    }
}
</script>
<template>
    <form @submit.prevent="submitForm">
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
            <base-button>Send Message</base-button>
        </p>
    </form>
</template>

<style scoped src="../../../styles/contact-coach.css"></style>

