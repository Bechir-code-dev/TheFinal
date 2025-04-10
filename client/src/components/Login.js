import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logging_user } from "../redux/actions";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Login = () => {
  const [newEmail, setThenewEmail] = useState("");
  const [newPassword, setThenewPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    openModal();
  }, []);

  const log_in = (e) => {
    e.preventDefault();
    const user = {
      email: newEmail,
      password: newPassword,
    };
    dispatch(logging_user(user));
    navigate("/listoftickets");
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
      </Modal>
    </>
  );
};

export default Login;
