import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adding_to_achat, authorized } from "../redux/actions";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newCards, setNewCards] = useState("");
  const [numberCard, setnumberCard] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [yearCard, setYearCard] = useState("");
  const [cvv, setCvv] = useState("");

  const ticket = useSelector((state) => state.tickets);
  const { id } = useParams();
  const currentUser = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  const canceling_payment = () => {
    navigate("/listoftickets");
  };

  const validateOrder = (e) => {
    e.preventDefault();
    if (!newCards || !numberCard || !dateCard || !yearCard || !cvv) {
      alert("You must fill in all the inputs");
      return;
    }
    if (ticket.quantity < 1) {
      alert('Please enter a valid quantity.');
      return;
    }
    if (!currentUser || !currentUser._id) {
      alert("You must be logged in to buy a ticket.");
      return;
    }

    const achatData = {
      ticketId: id,
      userId: currentUser._id,
    };
    dispatch(adding_to_achat(achatData));
    alert("Order Validated Successfully!");
    navigate(`/listoftickets`);
  };

  return (
    <div style={styles.pageBackground}>
      <form style={styles.formContainer}>
        <h1 style={styles.title}>Secure Payment</h1>
        <hr />

        <div style={styles.radioGroup}>
          <label style={styles.label}>Card Type:</label>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <input
              type="radio"
              name="card"
              value="visa"
              onChange={(e) => setNewCards(e.target.value)}
              style={{marginLeft:'90px'}}
            />
            <img src="/visa.png" alt="visa" style={styles.cardLogo} />

            <input
              type="radio"
              name="card"
              value="mastercard"
              onChange={(e) => setNewCards(e.target.value)}
            />
            <img src="/mastercard.png" alt="mastercard" style={styles.cardLogo} />
          </div>
        </div>

        <label style={styles.label}>Card Number</label>
        <input
          type="text"
          placeholder="Enter card number"
          style={styles.input}
          onChange={(e) => setnumberCard(e.target.value)}
        />

        <label style={styles.label}>Expiry Date</label>
        <div style={styles.expiryDate}>
          <select style={styles.input} onChange={(e) => setDateCard(e.target.value)}>
            <option value="">Month</option>
            {[
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ].map((month, idx) => (
              <option key={idx} value={month}>{month}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Year"
            style={styles.input}
            onChange={(e) => setYearCard(e.target.value)}
          />
        </div>

        <label style={styles.label}>CVV</label>
        <input
          type="password"
          placeholder="ex: 123"
          maxLength={3}
          style={{ ...styles.input, width: "100px" , marginLeft:'130px'}}
          onChange={(e) => setCvv(e.target.value)}
        />

        <div style={styles.buttonGroup}>
          <Button onClick={validateOrder} variant="success" style={styles.button}>
            Validate Order
          </Button>
          <Button onClick={canceling_payment} variant="danger" style={styles.button}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  pageBackground: {
    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/142/315/583/feyenoord-football-stadium-rotterdam-de-kuip-hd-wallpaper-preview.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    width: "400px",
    maxWidth: "90%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },
  label: {
    marginTop: "15px",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "10px",
  },
  cardLogo: {
    width: "50px",
  },
  expiryDate: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    width: "48%",
  },
};

export default Payment;
















// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { adding_to_achat, authorized } from "../redux/actions";

// const Payment = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [newCards, setNewCards] = useState("");
//   const [numberCard, setnumberCard] = useState("");
//   const [dateCard, setDateCard] = useState("");
//   const [yearCard, setYearCard] = useState("");
//   const [cvv, setCvv] = useState("");
// const ticket = useSelector(state=> state.tickets)
// const {id}= useParams()

//   const currentUser = useSelector(state=>state.users)
//   useEffect(()=>{

//     dispatch(authorized());

// }, [dispatch]);


//   const canceling_payment = () => {
//     navigate("/listoftickets");
//   };

//   const validateOrder = (e) => {
//     e.preventDefault();
//     if (!newCards || !numberCard || !dateCard || !yearCard || !cvv) {
//       alert("You must fill in all the inputs");
//     } else {
//       alert("Order Validated Successfully");
//     }
//     if (ticket.quantity <1) {
//       alert('Please enter a valid quantity (greater than 0 and less than available stock).');
//       return;
//     }
//     if (!currentUser || !currentUser._id) {
//       alert("You must be logged in to bye a ticket.");
//       return;
//     }

//     const achatData = {
//       ticketId:id,
//       userId: currentUser._id ,
//     }
//     //dispatch(delete_ticket());
//     dispatch(adding_to_achat(achatData))
//     navigate(`/listoftickets`)
//   };

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh",
//           padding: "40px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <form
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.95)",
//             padding: "30px 50px",
//             borderRadius: "15px",
//             boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
//             width: "100%",
//             maxWidth: "600px",
//           }}
//         >
//           <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Payment</h1>
//           <hr />
//           <label style={{ marginRight: "20px" }}>Card Type</label>
//           <input
//             type="radio"
//             name="radio"
//             value="visa"
//             onChange={(e) => setNewCards(e.target.value)}
//           />
//           <img
//             src="/visa.png"
//             alt="visa"
//             style={{ width: "50px", margin: "0 10px" }}
//           />
//           <input
//             type="radio"
//             name="radio"
//             value="mastercard"
//             onChange={(e) => setNewCards(e.target.value)}
//           />
//           <img
//             src="/mastercard.png"
//             alt="mastercard"
//             style={{ width: "50px" }}
//           />
//           <br />
//           <br />
//           <label>Card Number</label>
//           <input
//             type="text"
//             placeholder="Your card number"
//             style={{ width: "100%", marginTop: "10px", padding: "8px" }}
//             onChange={(e) => setnumberCard(e.target.value)}
//           />
//           <br />
//           <br />
//           <label>Expiry Date</label>
//           <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//             <select
//               style={{ flex: 1, padding: "8px" }}
//               onChange={(e) => setDateCard(e.target.value)}
//             >
//               <option value="">Month</option>
//               {[
//                 "January",
//                 "February",
//                 "March",
//                 "April",
//                 "May",
//                 "June",
//                 "July",
//                 "August",
//                 "September",
//                 "October",
//                 "November",
//                 "December",
//               ].map((month, index) => (
//                 <option key={index} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               placeholder="Year"
//               style={{ flex: 1, padding: "8px" }}
//               onChange={(e) => setYearCard(e.target.value)}
//             />
//           </div>
//           <br />
//           <label>CVV</label>
//           <br />
//           <input
//             type="password"
//             placeholder="ex: 123"
//             maxLength={3}
//             style={{ width: "100px", marginTop: "10px", padding: "8px" }}
//             onChange={(e) => setCvv(e.target.value)}
//           />
//           <br />
//           <div style={{ marginTop: "30px", textAlign: "center" }}>
//             <Button
//               onClick={validateOrder}
//               variant="outline-primary"
//               style={{ marginRight: "20px" }}
//             >
//               Validate Order
//             </Button>
//             <Button variant="outline-danger" onClick={canceling_payment}>
//               Cancel
//             </Button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Payment;
