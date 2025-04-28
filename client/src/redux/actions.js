import axios from "axios";
import {
  ADDING_TICKET,
  ADDING_USER,
  AUTHORIZED,
  DELETE_TICKET,
  GETTING_ALL_TICKETS,
  GETTING_ONE_USER,
  GETTING_USERS,
  LOG_OUT,
  LOGGING_USER,
  SET_IMAGE,
  UPDATING_USER,
  ADDING_TO_ACHAT,
  OPEN_SIGNIN_MODAL,
  CLOSE_SIGNIN_MODAL,
  GETTING_ALL_EVENTS,
  ADDING_EVENT,
} from "./actionTypes";

export const adding_user = (newOne) => async (dispatch) => {
  try {
    const res = await axios.post("/users/adduser", newOne);
    dispatch({ type: ADDING_USER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
export const getting_one_user = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/getOneUser/${id}`);
    dispatch({ type: GETTING_ONE_USER, payload: res.data.OneUser });
  } catch (error) {
    console.error("The error is :", error);
  }
};
export const logging_user = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", user);
    dispatch({ type: LOGGING_USER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
export const log_out = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
export const authorized = () => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get("/users/auth", config);
    dispatch({ type: AUTHORIZED, payload: res.data });
  } catch (error) {
    console.error(
      "Error logging in user:",
      error.response?.data || error.message
    );
  }
};
export const uploadImage = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("users/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: SET_IMAGE, payload: res.data });
  } catch (error) {
    console.error("error in uploading image", error);
  }
};
export const adding_ticket = (newTicket) => async (dispatch) => {
  try {
    const res = await axios.post("/tickets/addTicket", {
      seates_zone: newTicket.place,
      totalprice: newTicket.price,
      quantity: newTicket.quantity,
    });
    dispatch({ type: ADDING_TICKET, payload: res.data.newTicket });
  } catch (error) {
    console.error("error when you add ticket", error);
  }
};
export const getting_all_tickets = () => async (dispatch) => {
  try {
    const res = await axios.get("/tickets/getAlltickets");
    dispatch({ type: GETTING_ALL_TICKETS, payload: res.data.Alltickets });
  } catch (error) {
    console.error(error);
  }
};
export const getting_users = () => async (dispatch) => {
  try {
    const res = await axios.get(`/users/getUsers`);
    dispatch({ type: GETTING_USERS, payload: res.data.allUsers });
  } catch (error) {
    console.error(error);
  }
};
export const delete_ticket = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/tickets/deleting/${_id}`);
    dispatch({ type: DELETE_TICKET, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const updating_user = (id, NewUpdated) => async (dispatch) => {
  try {
    const res = await axios.put(`/users/updateUser/${id}`, NewUpdated);
    dispatch({ type: UPDATING_USER, payload: res.data.NewUpdated });
  } catch (error) {
    console.error(error);
  }
};
export const adding_to_achat = (achatData) => async (dispatch) => {
  try {
    const res = await axios.post(`/achats/addAchat`, achatData);
    dispatch({ type: ADDING_TO_ACHAT, payload: res.data });
  } catch (error) {
    console.error("Error while adding to achat:", error);
  }
};

export const openSigninModal = () => ({
  type: OPEN_SIGNIN_MODAL,
});

export const closeSigninModal = () => ({
  type: CLOSE_SIGNIN_MODAL,
});
export const adding_event = (newEvent) => async (dispatch) => {
  try {
    const res = await axios.post("/events/addEvent", newEvent);
    console.log("Response from API:", res);
    dispatch({ type: ADDING_EVENT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
export const getting_all_events = () => async (dispatch) => {
  try {
    const res = await axios.get("/events/getAllEvents");
    dispatch({ type: GETTING_ALL_EVENTS, payload: res.data.AllEvents });
  } catch (error) {
    console.error(error);
  }
};
