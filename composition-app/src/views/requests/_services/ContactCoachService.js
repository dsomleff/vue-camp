import { handleFormErrors } from '@/utils/handleFormErrors.js';
import { useRequestsStore } from '@/stores/requests/requestsStore.js';
import { ContactCoachSchema } from '@/schemas/ContactCoachSchema.js';

function submitForm(formData, formErrors, route, router) {
    const requestStore = useRequestsStore();
    
    const errors = handleFormErrors(
        formData,
        ContactCoachSchema
    );
    
    if (errors) {
        Object.assign(formErrors, errors);
    } else {
        Object.assign(formErrors, {});
        
        requestStore.contactCoach({
            coachId: route.params.id,
            email: formData.email,
            message: formData.message
        });
        
        router.replace('/coaches');
    }
}

export {submitForm};
