export const validationForm = (username: string, password: string) => {
    if ( username.length >= 6 && password.length >= 6) {
        return true;
    }
    return false;
};
