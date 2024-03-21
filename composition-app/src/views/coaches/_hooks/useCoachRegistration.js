import { useCoachesStore } from '@/stores/coaches/coachesStoreOld.js';

export function useCoachRegistration(router) {
    const coachStore = useCoachesStore();
    
    const saveData = data => {
        coachStore.registerCoach(data);
        router.replace('/coaches');
    };
    
    return {
        saveData
    };
}
