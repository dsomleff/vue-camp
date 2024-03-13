export function handleFormErrors(formData, schema) {
    const { error } = schema.safeParse(formData);
    
    if (error) {
        return error.errors.reduce((errors, errorMessage) => {
            const field = errorMessage.path[0];
            const message = errorMessage.message;
            
            return { ...errors, [field]: message.trim() };
        }, {});
    } else {
        return null;
    }
}
