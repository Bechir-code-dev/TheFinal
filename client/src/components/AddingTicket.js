import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { adding_ticket } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const AddingTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");

  const ticketADD = (e) => {
    e.preventDefault();
    if (!name || !place || !price) {
      alert("Please fill all fields");
      return;
    }
    const newTicket = {
      name,
      place,
      price,
    };
    dispatch(adding_ticket(newTicket));
    alert("Ticket added successfully!");
    navigate("/listoftickets");
  };

  return (
    <>
      <h2 style={{ textDecoration: "underline" }}>Add The Ticket</h2>
      <br />
      <br />
      <form action="/add-ticket" method="post">
        <label type="title">Name :</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter ticket title"
          required
        />
        <br />
        <br />
        <label type="priority">The Place:</label>
        <br />
        <select
          id="priority"
          name="priority"
          onChange={(e) => setPlace(e.target.value)}
          required
        >
          <option>Select The Place</option>
          <option>Virage</option>
          <option>Pelouse</option>
          <option>Enceinte Supérieure </option>
          <option>Enceinte inférieure </option>
          <option>Tribune</option>
          <option>Loge</option>
        </select>
        <br />
        <br />

        <label type="assignee">The Price:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="The Price is :"
          required
        />
        <br />
        <br />
        <Button
          type="submit"
          onClick={ticketADD}
          variant="primary"
          style={{ marginRight: "5px" }}
        >
          Add Ticket
        </Button>
        <Button type="button" onClick={() => navigate("/")} variant="danger">
          Cancel
        </Button>
      </form>
    </>
  );
};
export default AddingTicket;
