export const selectUser = (user) => {
    return {
        type : "USER_SELECTED",
        payload: user
    }
};

export const notifyAboutTyping = (user, message) => {
    return {
        type : "USER_TYPING",
        payload: {user : user, message : message}
    }
};