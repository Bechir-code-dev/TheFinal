import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const EventCard = ({ _id, name, date, location }) => {
  const navigate = useNavigate();

  const goToTickets = () => {
    navigate("/listoftickets");
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "15px",
        width: "270px",
        margin: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={{ padding: "20px" }}>
        <h2
          style={{ fontSize: "1.4rem", marginBottom: "8px", fontWeight: "600" }}
        >
          {name}
        </h2>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "4px" }}>
          {date}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "12px" }}>
          {location}
        </p>
        <Button
          variant="primary"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
          }}
          onClick={goToTickets}
        >
          View Tickets
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
