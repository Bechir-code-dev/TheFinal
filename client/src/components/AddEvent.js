import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // <<< add this
import { adding_event } from "../redux/actions";
import Button from "react-bootstrap/Button";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, date, location };
    console.log("Submitting new event:", newEvent);
    dispatch(adding_event(newEvent));
    navigate("/events");
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1705593973313-75de7bf95b56?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "655px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Add New Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Event Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Event Name"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Event Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Event Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="The Location"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <Button type="submit" variant="success" style={{ width: "100%" }}>
            Add Event
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
