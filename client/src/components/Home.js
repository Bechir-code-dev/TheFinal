import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  adding_user,
  authorized,
  logging_user,
  uploadImage,
} from "../redux/actions";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

Modal.setAppElement("#root");

const Home = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [theemail, setTheemail] = useState("");
  const [thepassword, setThepassword] = useState("");
  const [thefullname, setThefullname] = useState("");
  const [thenum, setThenum] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch, id]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function submit_user(e) {
    e.preventDefault();
    const newOne = {
      email: theemail,
      password: thepassword,
      num: thenum,
      fullname: thefullname,
      image: image,
    };
    dispatch(adding_user(newOne));
    closeModal();
  }

  const logging_out = () => {
    dispatch(logging_user());
    navigate("/");
  };

  const go_log = () => {
    navigate("/login");
  };
  const image = useSelector((state) => state.image);
  const handleimageupload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadImage(formData));
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ height: "40px", marginTop: "auto" }}
        sticky="top"
      >
        <Container>
          <Link
            to={"/"}
            style={{ textDecoration: "underline", color: "black" }}
          >
            Matchday Tickets
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to={`/`}
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  color: "green",
                }}
              >
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* {user && (
          <span style={{ color: "black" }}> Welcome {user.fullname} </span>
        )} */}
        {user ? (
          <span>
            {" "}
            <span style={{ color: "black", marginRight: "10px" }}>
              {" "}
              Welcome {user.fullname} !
            </span>
            <button
              onClick={logging_out}
              style={{
                borderRadius: "5px",
                backgroundColor: "white",
                marginLeft: "7px",
              }}
            >
              Log out
            </button>
          </span>
        ) : (
          <button
            style={{
              borderRadius: "5px",
              backgroundColor: "white",
              margin: "auto",
            }}
            onClick={go_log}
          >
            Login
          </button>
        )}

        {!user ? (
          <button
            onClick={openModal}
            style={{
              borderRadius: "5px",
              backgroundColor: "white",
              margin: "auto",
            }}
          >
            Sign in
          </button>
        ) : (
          <></>
        )}
      </Navbar>
      <div
        style={{
          backgroundImage: "url('./back2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          margin: 0,
          height: "100vh",
          color: "white",
        }}
      ></div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Sign in</h1>
        <br />
        <form>
          <label>Your FullName</label>
          <br />
          <input
            style={{ borderColor: "black" }}
            value={thefullname}
            type="text"
            onChange={(e) => setThefullname(e.target.value)}
          />
          <br />
          <label>Your Email</label>
          <br />
          <input
            style={{ borderColor: "black" }}
            value={theemail}
            type="text"
            onChange={(e) => setTheemail(e.target.value)}
          />
          <br />
          <label>Your Password</label>
          <br />
          <input
            style={{ borderColor: "black" }}
            value={thepassword}
            type="password"
            onChange={(e) => setThepassword(e.target.value)}
          />
          <br />
          <label>Your Num</label>
          <br />
          <input
            style={{ borderColor: "black" }}
            value={thenum}
            type="number"
            onChange={(e) => setThenum(e.target.value)}
          />
          <input
            style={{ borderColor: "black" }}
            type="file"
            onChange={handleimageupload}
          />
        </form>
        <br />
        <Button
          onClick={submit_user}
          variant="outline-primary"
          type="submit"
          style={{ marginRight: "5px" }}
        >
          Submit
        </Button>
        <Button onClick={closeModal} variant="outline-danger">
          Close
        </Button>
      </Modal>
      <Outlet />
    </>
  );
};

export default Home;
