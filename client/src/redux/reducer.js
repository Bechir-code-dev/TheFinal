import {
  ADDING_TICKET,
  ADDING_USER,
  AUTHORIZED,
  DELETE_TICKET,
  GETTING_ALL_TICKETS,
  GETTING_ONE_USER,
  GETTING_USER,
  LOG_OUT,
  LOGGING_USER,
  SET_IMAGE,
} from "./actionTypes";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  image: null,
  tickets: [],
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
      return { ...state, tickets: [...state.tickets, action.payload.newTicket] };
    case GETTING_ALL_TICKETS:
      return { ...state, tickets: action.payload.tickets };
    case GETTING_USER:
      return { ...state, users: action.payload };
    case DELETE_TICKET:
      return { ...state, 
        tickets: state.tickets.filter((ticket) => ticket._id !== action.payload)}
    default:
      return state;
  }
};
export default reducer;
