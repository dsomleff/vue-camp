<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import { ContactCoachSchema } from '@/schemas/ContactCoachSchema.js';
import { useRequestsStore } from '@/stores/requests/requestsStore.js';
import { handleFormErrors } from '@/utils/handleFormErrors.js';

export default {
    components: {BaseButton},
    data() {
        return {
            email: '',
            message: '',
            formErrors: {},
            requestStore: useRequestsStore()
        }
    },
    methods: {
        submitForm() {
            const formErrors = handleFormErrors(
                {email: this.email, message: this.message},
                ContactCoachSchema
            );

            if (formErrors) {
                this.formErrors = formErrors;
            } else {
                this.requestStore.contactCoach({
                    coachId: this.$route.params.id,
                    email: this.email,
                    message: this.message
                });

                this.$router.replace('/coaches');
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <p class="form-control">
            <label for="email">
                Your E-mail
            </label>
            <input
                id="email"
                v-model.trim="email"
                type="email"
            >
            <span
                v-if="formErrors.email"
                class="errors"
            >{{ formErrors.email }}</span>
        </p>

        <p class="form-control">
            <label for="message">
                Message
            </label>
            <textarea
                id="message"
                v-model.trim="message"
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

