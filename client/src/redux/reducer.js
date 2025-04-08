import { ADDING_USER, AUTHORIZED, GETTING_ONE_USER, LOG_OUT, LOGGING_USER, SET_IMAGE } from "./actionTypes";

const initialState = {
    users: [],
    token: localStorage.getItem("token"),
    image: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_USER:
            localStorage.setItem("token", action.payload.token);
            return { ...state, users: action.payload.newOne, token: action.payload.token };
        case GETTING_ONE_USER:
            return { ...state, users: action.payload };
        case LOGGING_USER:
            localStorage.setItem("token", action.payload.token);
            return { ...state, users: action.payload.user, token: action.payload.token };
        case LOG_OUT:
            localStorage.removeItem("token");
            return { ...state, users: null, token: null };
        case AUTHORIZED:
            return { ...state, users: null , token:null};
        case SET_IMAGE:
            return { ...state, image:action.payload};


        default:
            return state;
    }

}
export default reducer;