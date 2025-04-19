import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_ticket } from "../redux/actions";


const Payment = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newCards,setNewCards]=useState("");
  const [numberCard , setnumberCard]=useState("");
  const [dateCard , setDateCard]=useState("");
  const [yearCard, setYearCard] = useState("");
  const [cvv, setCvv] = useState("");


  const canceling_payment = () => {
    navigate("/listoftickets");
  };

  const validateOrder = (e) =>{
    e.preventDefault();
   if (!newCards || !numberCard || !dateCard || !yearCard || !cvv){
    alert('You must fill in all the inputs')
   }else{
    alert('Order Validated Successfully')
   }
   dispatch(delete_ticket());
  };

  return (
    <>
     <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px 50px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Payment</h1>
        <hr />
        <label style={{ marginRight: "20px" }}>Card Type</label>
        <input
          type="radio"
          name="radio"
          value="visa"
          onChange={(e) => setNewCards(e.target.value)}
        />
        <img src="/visa.png" alt="visa" style={{ width: "50px", margin: "0 10px" }} />
        <input
          type="radio"
          name="radio"
          value="mastercard"
          onChange={(e) => setNewCards(e.target.value)}
        />
        <img src="/mastercard.png" alt="mastercard" style={{ width: "50px" }} />
        <br />
        <br />
        <label>Card Number</label>
        <input
          type="text"
          placeholder="Your card number"
          style={{ width: "100%", marginTop: "10px", padding: "8px" }}
          onChange={(e) => setnumberCard(e.target.value)}
        />
        <br />
        <br />
        <label>Expiry Date</label>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <select
            style={{ flex: 1, padding: "8px" }}
            onChange={(e) => setDateCard(e.target.value)}
          >
            <option value="">Month</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Year"
            style={{ flex: 1, padding: "8px" }}
            onChange={(e) => setYearCard(e.target.value)}
          />
        </div>
        <br />
        <label>CVV</label><br/>
        <input
          type="password"
          placeholder="ex: 123"
          maxLength={3}
          style={{ width: "100px", marginTop: "10px", padding: "8px" }}
          onChange={(e) => setCvv(e.target.value)}
        />
        <br />
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <Button
            onClick={validateOrder}
            variant="outline-primary"
            style={{ marginRight: "20px" }}
          >
            Validate Order
          </Button>
          <Button variant="outline-danger" onClick={canceling_payment}>
            Cancel
          </Button>
        </div>
      </form>
    </div>

    </>
  );
};
export default Payment;
