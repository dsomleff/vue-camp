const registerCoach = function (data) {
    const coachData = {
        id: new Date().toISOString(),
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas,
    };
    
    this.$state.coaches.push(coachData);
};

export {registerCoach};
