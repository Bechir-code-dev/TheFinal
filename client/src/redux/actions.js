import axios from "axios";
import {
  ADDING_USER,
  AUTHORIZED,
  GETTING_ONE_USER,
  LOG_OUT,
  LOGGING_USER,
  SET_IMAGE,
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
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = '';
};
export const authorized = () =>(dispatch)=>{
  try {
    const config = {
      headers : {authorisation : localStorage.getItem("token")},
    };
    const res = axios.get("/users/auth" , config);
    dispatch({ type: AUTHORIZED , payload : res.data});
  } catch (error) {
    console.error(error);
  }
};
export const uploadImage = (formData)=> async(dispatch)=> {
  try {
    const res = await axios.post('users/upload', formData, {headers:{'Content-Type': 'multipart/form-data',}});
    dispatch({type: SET_IMAGE, payload:res.data});
  } catch (error) {
    console.error("error in uploading image", error);
  }
};