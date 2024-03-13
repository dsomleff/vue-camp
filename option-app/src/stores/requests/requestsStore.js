import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useRequestsStore = defineStore('requests', () => {
    const requests = reactive([]);
    
    const contactCoach = (data) => {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: data.coachId,
            userEmail: data.email,
            message: data.message
        }
        
        requests.push(newRequest);
    }

    
    return {requests, contactCoach}
})
