import { handleFormErrors } from '@/utils/handleFormErrors.js';
import { RegisterFormSchema } from '@/schemas/RegisterFormSchema.js';

export function useFormSubmit(formData, formErrors, emits) {
    const submitForm = () => {
        const errors = handleFormErrors(formData.value, RegisterFormSchema);
        if (errors) {
            formErrors.value = errors;
        } else {
            formErrors.value = {};
            const data = {
                first: formData.value.firstName,
                last: formData.value.lastName,
                desc: formData.value.description,
                rate: formData.value.rate,
                areas: formData.value.areas
            };
            emits('save-data', data);
        }
    };
    
    return {
        submitForm
    };
}
