<script setup>
import BaseCard from '@/components/ui/BaseCard.vue';
import { useRequestsStore } from '@/stores/requests/requestsStore.js';
import RequestItem from '@/components/requests/RequestItem.vue';
import {computed} from 'vue';

const requestStore = useRequestsStore();

const receivedRequests = computed(() => {
    return requestStore.getRequests;
})
</script>

<template>
    <section>
        <BaseCard>
            <header>
                <h2>Requests Received</h2>
            </header>

            <ul v-if="receivedRequests.length > 0">
                <RequestItem
                    v-for="request in receivedRequests"
                    :key="request.id"
                    :email="request.userEmail"
                    :message="request.message"
                />
            </ul>

            <p v-else>
                No Requests Found
            </p>
        </BaseCard>
    </section>
</template>

<style scoped src="../../../styles/requests.css"></style>
