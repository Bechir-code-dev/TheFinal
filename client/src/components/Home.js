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
  closeSigninModal,
  log_out,
  openSigninModal,
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
  const modalIsOpen = useSelector((state) => state.isSigninModalOpen);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [num, setNum] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.users);
  const [showLogin, setShowLogin] = useState(false);
  const image = useSelector((state) => state.image);
  // const [hideOneUser, setHideOneUser] = useState(false);

  const isOnHome = location.pathname === "/";

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);



  useEffect(() => {
    if (user && user.role === "admin") {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, [user]);

  function openModal() {
    dispatch(openSigninModal());
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    dispatch(closeSigninModal());
  }

  const handleImageupload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadImage(formData));
  };

  const newOne = {
    email,
    password,
    num,
    fullname,
    image,
  };

  const submit_user = (e) => {
    e.preventDefault();

    dispatch(adding_user(newOne));
    navigate(`/events`);
    closeModal();
  };

  const logging_out = () => {
    dispatch(log_out());
    navigate("/");
  };

  const go_log = () => {
    navigate("/login");
  };

  return (
    <>
        <Container>
<Navbar
  expand="lg"
  bg="light"
  variant="light"
  sticky="top"
  className="shadow-sm py-3"
>
  <Container>
    <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
      Matchday Tickets
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto gap-3">
        {user && (
          <>
            <Nav.Link as={Link} to="/" className="text-success fw-semibold">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/events" className="text-success fw-semibold">
              Events
            </Nav.Link>

            <Nav.Link as={Link} to="/listoftickets" className="text-success fw-semibold">
              List of Tickets
            </Nav.Link>

            <Nav.Link as={Link} to="/payment" className="text-success fw-semibold">
              Payment
            </Nav.Link>

            {user.role === "admin" && (
              <>
                <Nav.Link as={Link} to="/ListOfUsers" className="text-success fw-semibold">
                  List Of Users
                </Nav.Link>
                <Nav.Link as={Link} to="/addTicket" className="text-success fw-semibold">
                  Add Ticket
                </Nav.Link>
                <Nav.Link as={Link} to="/addUser" className="text-success fw-semibold">
                  Add User
                </Nav.Link>
                <Nav.Link as={Link} to="/add-event" className="text-success fw-semibold">
                  Add Event
                </Nav.Link>
              </>
            )}
          </>
        )}
      </Nav>

      <Nav className="align-items-center gap-3">
        {user ? (
          <>
            <span className="text-success fw-semibold" style={{textDecorationLine:'underline'}}>Welcome {user.fullname}</span>
            <Link to="/OneUser">
              <img
                src={user.image}
                alt="User"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Link>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={logging_out}
              style={{marginRight:'-90px'}}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={openModal}
            >
              Sign in
            </Button>
            <Button variant="outline-success" size="sm" onClick={go_log}>
              Login
            </Button>
          </>
        )}
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Sign In Modal"
      >
        <h1
          ref={(_subtitle) => (subtitle = _subtitle)}
          style={{ textAlign: "center" }}
        >
          Sign in
        </h1>
        <br />
        <form>
          <label>Name </label>
          <input
            placeholder="Your Name"
            style={{ borderColor: "black", marginRight: "30px" }}
            value={fullname}
            type="text"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <label>E-mail </label>
          <input
            placeholder="Your E-mail"
            style={{ borderColor: "black" }}
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Password </label>
          <input
            placeholder="Your password"
            style={{ borderColor: "black", marginRight: "30px" }}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Phone Number </label>
          <input
            placeholder="Your PhoneNumber"
            style={{ borderColor: "black" }}
            value={num}
            type="number"
            onChange={(e) => setNum(e.target.value)}
            required
          />
          <br />
          <label>Your Photo :</label>
          <input
            style={{
              borderColor: "black",
              marginTop: "10px",
              marginLeft: "20px",
            }}
            type="file"
            onChange={handleImageupload}
            required
          />
          <br />

          <Button
            onClick={submit_user}
            variant="outline-primary"
            type="submit"
            style={{ marginRight: "5px", marginTop: "10px" }}
          >
            Submit
          </Button>
          <Button
            onClick={closeModal}
            variant="outline-danger"
            style={{ marginRight: "5px", marginTop: "10px" }}
          >
            Close
          </Button>
        </form>
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
                marginTop: "200px",
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
    </>
  );
};

export default Home;
