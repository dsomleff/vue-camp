import { ref, computed } from 'vue';

export function useFilteredCoaches(coachesStore) {
    const activeFilters = ref({
        frontend: true,
        backend: true,
        career: true
    });
    
    const filteredCoaches = computed(() => {
        const coaches = coachesStore.getCoaches;
        return coaches.filter(coach => {
            for (const area in activeFilters.value) {
                if (activeFilters.value[area] && coach.areas.includes(area))
                    return true;
            }
            return false;
        });
    });
    
    const hasCoaches = computed(() => coachesStore.hasCoaches);
    
    const setFilters = updatedFilters => {
        activeFilters.value = updatedFilters;
    };
    
    return {
        filteredCoaches,
        hasCoaches,
        setFilters
    };
}
