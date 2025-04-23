import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Ticket = ({ seates_zone, totalprice, bookingdate, user_fullname }) => {
  const navigate = useNavigate();

  const pay_your_ticket = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="cards">
        <Card style={{ width: "25rem", margin: "auto", marginBottom: "10px" }}>
          <Card.Body>
            <Card.Title>{seates_zone}</Card.Title>
            <Card.Text>
              The name is :
              <span style={{ textDecorationLine: "underline" }}>
                {user_fullname}
              </span>
              <br />
              The BookingDate is :{bookingdate}
              <br />
              <span style={{ fontFamily: "impact" }}>{totalprice}</span>
            </Card.Text>
            <Button variant="primary" onClick={pay_your_ticket}>
              Pay Your Ticket
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Ticket;

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
