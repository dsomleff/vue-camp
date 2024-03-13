<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import { useRequestsStore } from '@/stores/requests/requestsStore.js';
import RequestItem from '@/components/requests/RequestItem.vue';

export default {
    components: { RequestItem, BaseCard},
    data() {
        return {
            requestsStore: useRequestsStore()
        }
    },
    computed: {
        receivedRequests() {
            return this.requestsStore.getRequests;
        }
    }

}
</script>

<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>

            <ul>
                <request-item
                    v-for="request in receivedRequests"
                    :key="request.id"
                    :email="request.userEmail"
                    :message="request.message"
                />
            </ul>
        </base-card>
    </section>
</template>

<style scoped src="../../../styles/requests.css"></style>
