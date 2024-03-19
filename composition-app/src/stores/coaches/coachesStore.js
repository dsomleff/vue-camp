import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useCoachesStore = defineStore('coaches', () => {
    const coaches = reactive([
        {
            id: 'c1',
            firstName: 'Maximilian',
            lastName: 'Schwarzmüller',
            areas: ['frontend', 'backend', 'career'],
            description:
                "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
            hourlyRate: 30
        },
        {
            id: 'c2',
            firstName: 'Julie',
            lastName: 'Jones',
            areas: ['frontend', 'career'],
            description:
                'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
            hourlyRate: 30
        }
    ]);
    
    const getCoaches = computed(() => {
        return coaches;
    });
    
    const hasCoaches = () => {
        return coaches && coaches.length > 0;
    };
    
    const registerCoach = function (data) {
        const coachData = {
            id: new Date().toISOString(),
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        };
        
        coaches.push(coachData);
    };
    
    return {coaches, getCoaches, registerCoach}
})
