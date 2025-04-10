import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Ticket = ({
  user_fullname,
  seates_zone,
  totalprice,
  bookingdate,
  status,
}) => {
  const navigate = useNavigate();

  // const user = useSelector((state) => state.users);
  // useEffect(() => {
  //   dispatch(authorized());
  // }, [dispatch]);
  // const [showLogin, setShowLogin] = useState(false);
  // useEffect(() => {
  //   if (user && user.role === "admin") {
  //     setShowLogin(true);
  //   } else {
  //     setShowLogin(false);
  //   }
  // }, [user]);

  const pay_your_ticket = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="background">
        <h1
          style={{
            "font-size": "3em",
            "font-weight": "bold",
            color: "beige",
            "text-align": "center",
            margin: "20px 0",
            "text-transform": "uppercase",
            "letter-spacing": "3px",
            // 'background': 'linear-gradient(to right, #006699, #00ccff)',
            "-webkit-background-clip": "text",
            fontFamily: "fantasy",
          }}
        >
          Welcome to Your Ultimate Matchday Experience
        </h1>
        <br />

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{seates_zone}</Card.Title>
            <Card.Text>
              {bookingdate} <br />
              <span style={{ fontFamily: "impact" }}>{totalprice}</span>
            </Card.Text>
            <Button variant="primary" onClick={pay_your_ticket}>
              Pay Your Ticket
            </Button>
          </Card.Body>
        </Card>
      </div>
      {/* {showLogin && <div>bechiro</div>} */}
    </>
  );
};

export default Ticket;
