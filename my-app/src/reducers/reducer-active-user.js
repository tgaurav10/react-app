export default function (state=null, action) {
    switch (action.type) {
        case "USER_SELECTED" :
            return action.payload;
        case "USER_TYPING" :
            return action.payload;
        default:
            return state;
    }
}