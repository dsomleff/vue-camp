<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import { RegisterFormSchema } from '@/schemas/RegisterFormSchema.js';

export default {
    components: {BaseButton},
    emits: ['save-data'],
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                description: '',
                rate: null,
                areas: []
            },
            formErrors: {}
        }
    },
    methods: {
        submitForm() {
            const { error } = RegisterFormSchema.safeParse(this.formData);

            if (error) {
                this.formErrors = error.errors.reduce((errors, errorMessage) => {
                    const field = errorMessage.path[0];
                    const message = errorMessage.message;

                    return { ...errors, [field]: message.trim() };
                }, {});
            } else {
                this.formErrors = {};

                const formData = {
                    first: this.formData.firstName,
                    last: this.formData.lastName,
                    desc: this.formData.description,
                    rate: this.formData.rate,
                    areas: this.formData.areas
                };

                this.$emit('save-data', formData);
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <p
            class="form-control"
            :class="{invalid: formErrors.firstName}"
        >
            <label
                for="firstname"
            >
                First Name
            </label>

            <input
                id="firstname"
                v-model.trim="formData.firstName"
                type="text"
            >

            <span
                v-if="formErrors.firstName"
                class="invalid"
            >{{ formErrors.firstName }}</span>
        </p>

        <p
            class="form-control"
            :class="{invalid: formErrors.lastName}"
        >
            <label for="lastname">Last Name</label>
            <input
                id="lastname"
                v-model.trim="formData.lastName"
                type="text"
            >
            <span v-if="formErrors.lastName">{{ formErrors.lastName }}</span>
        </p>

        <p
            class="form-control"
            :class="{invalid: formErrors.description}"
        >
            <label for="description">Description</label>
            <textarea
                id="description"
                v-model.trim="formData.description"
                rows="5"
            />
            <span v-if="formErrors.description">{{ formErrors.description }}</span>
        </p>

        <p
            class="form-control"
            :class="{invalid: formErrors.rate}"
        >
            <label for="rate">Hour Rate</label>
            <input
                id="rate"
                v-model.number="formData.rate"
                type="number"
            >
            <span v-if="formErrors.rate">{{ formErrors.rate }}</span>
        </p>

        <section
            class="form-control"
            :class="{invalid: formErrors.areas}"
        >
            <h3>Areas of your Expertise</h3>

            <p>
                <label for="frontend">Frontend</label>
                <input
                    id="frontend"
                    v-model="formData.areas"
                    type="checkbox"
                    value="frontend"
                >
            </p>

            <p>
                <label for="backend">Backend</label>
                <input
                    id="backend"
                    v-model="formData.areas"
                    type="checkbox"
                    value="backend"
                >
            </p>

            <p>
                <label for="career">Career</label>
                <input
                    id="career"
                    v-model="formData.areas"
                    type="checkbox"
                    value="career"
                >
            </p>
            <span
                v-if="formErrors.areas"
                class="invalid"
            >{{ formErrors.areas }}</span>
        </section>

        <base-button>Register</base-button>
    </form>
</template>

<style scoped src="../../../styles/coach-form.css"></style>
