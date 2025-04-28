import {
  ADDING_EVENT,
  ADDING_TICKET,
  ADDING_TO_ACHAT,
  ADDING_USER,
  AUTHORIZED,
  CLOSE_SIGNIN_MODAL,
  DELETE_TICKET,
  GETTING_ALL_EVENTS,
  GETTING_ALL_TICKETS,
  GETTING_ONE_USER,
  GETTING_USERS,
  LOG_OUT,
  LOGGING_USER,
  OPEN_SIGNIN_MODAL,
  SET_IMAGE,
} from "./actionTypes";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  image: null,
  tickets: [],
  achats: [],
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_USER:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        users: action.payload.newOne,
        // token: action.payload.token,
      };
    case GETTING_ONE_USER:
      return { ...state, users: action.payload };
    case LOGGING_USER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        users: action.payload.user,
        token: action.payload.token,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...state, users: null, token: null };
    case AUTHORIZED:
      return { ...state, users: action.payload.user };
    case SET_IMAGE:
      return { ...state, image: action.payload };
    case ADDING_TICKET:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case GETTING_ALL_TICKETS:
      return { ...state, tickets: action.payload };
    case GETTING_USERS:
      return { ...state, users: action.payload };
    case DELETE_TICKET:
      return { ...state, products: action.payload };
    case ADDING_TO_ACHAT:
      return { ...state, achats: action.payload.ticketOfUser };
    case OPEN_SIGNIN_MODAL:
      return { ...state, isSigninModalOpen: true };
    case CLOSE_SIGNIN_MODAL:
      return { ...state, isSigninModalOpen: false };
    case ADDING_EVENT:
      console.log("Updated events in reducer:", action.payload);
      return { ...state, events: [...state.events, action.payload] };
    case GETTING_ALL_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
export default reducer;
