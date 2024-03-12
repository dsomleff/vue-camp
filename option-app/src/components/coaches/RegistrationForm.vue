<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    components: {BaseButton},
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: []
        }
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };

            console.log(formData);
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <p class="form-control">
            <label for="firstname">First Name</label>
            <input
                id="firstname"
                v-model.trim="firstName"
                type="text"
            >
        </p>

        <p class="form-control">
            <label for="lastname">Last Name</label>
            <input
                id="lastname"
                v-model.trim="lastName"
                type="text"
            >
        </p>

        <p class="form-control">
            <label for="description">Description</label>
            <textarea
                id="description"
                v-model.trim="description"
                rows="5"
            />
        </p>

        <p class="form-control">
            <label for="rate">Hour Rate</label>
            <input
                id="rate"
                v-model.number="rate"
                type="number"
            >
        </p>

        <section class="form-control">
            <h3>Areas of your Expertise</h3>

            <p>
                <label for="frontend">Frontend</label>
                <input
                    id="frontend"
                    v-model="areas"
                    type="checkbox"
                    value="frontend"
                >
            </p>

            <p>
                <label for="backend">Backend</label>
                <input
                    id="backend"
                    v-model="areas"
                    type="checkbox"
                    value="backend"
                >
            </p>

            <p>
                <label for="career">Career</label>
                <input
                    id="career"
                    v-model="areas"
                    type="checkbox"
                    value="career"
                >
            </p>
        </section>

        <base-button>Register</base-button>
    </form>
</template>

<style scoped src="../../../styles/coach-form.css"></style>
