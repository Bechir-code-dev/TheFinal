import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  adding_user,
  authorized,
  log_out,
  uploadImage,
} from "../redux/actions";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000, 
  },
  content: {
    zIndex: 1001,
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, 0)",
    width: "50%",
    position: "fixed", 
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "10px",
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
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.users);
  const [showLogin, setShowLogin] = useState(false);

  const isOnHome = location.pathname === "/";

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  });

  useEffect(() => {
    if (user && user.role === "admin") {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, [user]);

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
      role: role,
    };
    dispatch(adding_user(newOne));
    closeModal();
    navigate("/listoftickets");
  }

  const logging_out = () => {
    dispatch(log_out());
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
              {showLogin && (
                <Link
                  to={`/ListOfUsers`}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "green",
                  }}
                >
                  List Of Users
                </Link>
              )}
              <Link
                to={"/listoftickets"}
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  color: "green",
                }}
              >
                List of Tickets
              </Link>
              {showLogin && (
                <Link
                  to={"/addTicket"}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "green",
                  }}
                >
                  Add Ticket
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* {user && (
          <span style={{ color: "black" }}> Welcome {user.fullname} </span>
        )} */}
        {user ? (
          <>
            <span style={{ color: "green", marginRight: "10px"}}>
              Welcome {user.fullname} !
            </span>
            <button
              onClick={logging_out}
              style={{
                borderRadius: "5px",
                backgroundColor: "white",
                marginLeft: "7px",
                marginRight:'10px'
              }}
            >
              LogOut
            </button>
            <Link to={`/OneUser`}>
              <img
                src={user.image}
                alt="userImage"
                style={{ borderRadius: "50%", marginRight:'10px' }}
              />
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </Navbar>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  onAfterOpen={afterOpenModal}
  style={customStyles}
  // style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" }, content: { padding: 0, border: "none", background: "none" }, height:"30%" }}
  contentLabel="Sign In Modal"
>
  {/* <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      background: "white",
      margin: "auto",
      padding: "2rem",
      borderRadius: "10px",
      maxWidth: "500px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    }}
  > */}
  <h1 ref={(_subtitle) => (subtitle = _subtitle)} style={{textAlign:'center'}}>Sign in</h1>
        <br />
        <form>
        <label>Name </label>
          <input
            placeholder="Your Name"
            style={{ borderColor: "black", marginRight:'30px' }}
            value={thefullname}
            type="text"
            onChange={(e) => setThefullname(e.target.value)}
          />
          <label>E-mail </label>
          <input
            placeholder="Your E-mail"
            style={{ borderColor: "black" }}
            value={theemail}
            type="text"
            onChange={(e) => setTheemail(e.target.value)}
          />
          <br />
          <br />
          <label>Password </label>
          <input
            placeholder="Your password"
            style={{ borderColor: "black", marginRight:'30px' }}
            value={thepassword}
            type="password"
            onChange={(e) => setThepassword(e.target.value)}
          />
          <label>Phone Number </label>
          <input
            placeholder="Your PhoneNumber"
            style={{ borderColor: "black" }}
            value={thenum}
            type="number"
            onChange={(e) => setThenum(e.target.value)}
          />
          <br />
          <input
            style={{ borderColor: "black", marginTop: "10px" }}
            type="file"
            onChange={handleimageupload}
          />
          <br />
          {showLogin && (
            <>
              <label>Role</label>
              <label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  name="role"
                  defaultChecked
                />
                Admin
              </label>
              <label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  name="role"
                />
                User
              </label>
            </>
          )}
          {showLogin && (
            <input
              style={{ borderColor: "black" }}
              value={role}
              type="text"
              onChange={(e) => setRole(e.target.value)}
            />
          )}
</form>
<Button
          onClick={submit_user}
          variant="outline-primary"
          type="submit"
          style={{ marginRight: "5px" , marginTop:'10px'}}
        >
          Submit
        </Button>
        <Button 
        onClick={closeModal} variant="outline-danger"
        style={{ marginRight: "5px" , marginTop:'10px'}}
        >
          Close
        </Button>

  {/* </motion.div> */}
</Modal>

      {isOnHome ? (
        <section
          style={{
            backgroundImage:
              "url('https://fr.reformsports.com/oachoata/2022/09/image-FEn7ype9G-transformed.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "94.3vh",
            position: "relative",
            color: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                marginTop:"200px"
              }}
            >
              Experience the Event Like Never Before
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                fontSize: "1.25rem",
                maxWidth: "600px",
                marginBottom: "2rem",
              }}
            >
              Choose your perfect seat and enjoy the view – all from your
              screen.
            </motion.p>

            <motion.button
              onClick={() => navigate("/login")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Book Your Seat Now
            </motion.button>
          </div>
        </section>
      ) : (
        <Outlet />
      )}

      {/* {isOnHome ? (
        <img
          style={{ width: "100%" }}
          src="https://fr.reformsports.com/oachoata/2022/09/image-FEn7ype9G-transformed.jpeg"
          alt="homeImage"
        />
      ) : (
        <Outlet />
      )} */}
    </>
  );
};

export default Home;
