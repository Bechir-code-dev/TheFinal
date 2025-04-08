import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logging_user } from "../redux/actions";

const Login = () => {
  const [newEmail, setThenewEmail] = useState("");
  const [newPassword, setThenewPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const log_in = (e) => {
    e.preventDefault();
    const user = {
      email: newEmail,
      password: newPassword,
    };
    dispatch(logging_user(user));
    navigate("/tickets");
  };

  return (
    <>
      <form>
        <label>Your Email : </label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setThenewEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Your Password : </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setThenewPassword(e.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{ marginRight: "5px", borderRadius: "5px" }}
          onClick={log_in}
        >
          Confirm
        </button>
        <button
          style={{ marginRight: "5px", borderRadius: "5px" }}
          onClick={() => navigate(`/`)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default Login;
