export const getCoaches = (state) => {
    return state.coaches;
};

export const hasCoaches = (state) => {
    return state.coaches && state.coaches.length > 0;
};
