import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { logging_user } from "../redux/actions";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';


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
  const location = useLocation();
  const isOnLogin = location.pathname === "/login";
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
        <h2 style={{textDecorationColor:'darkgrey'}}>LOG IN YOUR ACCOUNT</h2>
        <form>
          <label>Your Email : </label>
          <input
            placeholder="example@example.com"
            type="email"
            value={newEmail}
            onChange={(e) => setThenewEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Your Password : </label>
          <input
            placeholder="Your password"
            type="password"
            value={newPassword}
            onChange={(e) => setThenewPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <Button
            variant="success"
            type="submit"
            style={{ marginRight: "5px", borderRadius: "5px", marginLeft:'70px' }}
            onClick={log_in}
          >
            Confirm
          </Button>
          <Button
            variant="warning"
            style={{ marginRight: "5px", borderRadius: "5px" }}
            onClick={() => navigate(`/`)}
          >
            Cancel
          </Button>
        </form>
      </Modal>
      {isOnLogin?(<section
      style={{backgroundImage:"url(https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg)",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "94.3vh",
        position: "relative",
        color: "white",
      }}
      >
      </section>):(<Outlet/>)}
    </>
  );
};

export default Login;
