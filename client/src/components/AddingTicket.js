import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { adding_ticket } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const AddingTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const newTicket = {
    place,
    price,
    quantity,
  };

  const ticketADD = (e) => {
    e.preventDefault();
    if (!place || !price || !quantity) {
      alert("Please fill all fields");
      return;
    }
    dispatch(adding_ticket(newTicket));
    alert("Ticket added successfully!");
    navigate("/listoftickets");
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Add a New Ticket 🎫</h2>
        <form onSubmit={ticketADD} style={styles.form}>
          <label style={styles.label}>Place:</label>
          <input
            style={styles.input}
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Enter the place"
            required
          />

          <label style={styles.label}>Price:</label>
          <input
            style={styles.input}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the price"
            required
          />

          <label style={styles.label}>Quantity:</label>
          <input
            style={styles.input}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            required
          />

          <div style={styles.buttonGroup}>
            <Button type="submit" variant="success" style={styles.button}>
              Add Ticket
            </Button>
            <Button
              type="button"
              variant="danger"
              style={styles.button}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/592/261/194/champions-emirates-league-soccer-wallpaper-preview.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    width: "400px",
    maxWidth: "90%",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    textAlign: "left",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1em",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    width: "45%",
  },
};

export default AddingTicket;





















// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import { useDispatch } from "react-redux";
// import { adding_ticket } from "../redux/actions";
// import { useNavigate } from "react-router-dom";

// const AddingTicket = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [place, setPlace] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity]= useState("");



//   const newTicket = {
//     place,
//     price,
//     quantity
//   };

//   const ticketADD = (e) => {
//     e.preventDefault();
//     if (!place || !price || !quantity) {
//       alert("Please fill all fields");
//       return;
//     }
//     dispatch(adding_ticket(newTicket));
//     alert("Ticket added successfully!");
//     navigate("/listoftickets");
//   };

//   return (
//     <>
//       <h2 style={{ textDecoration: "underline" }}>Add The Ticket</h2>
//       <br />
//       <br />
//       <form action="/add-ticket" method="post" onSubmit={ticketADD}>
       
//         <label type="priority">The Place:</label>
//         <br />
//         <input
//           id="priority"
//           name="priority"
//           onChange={(e) => setPlace(e.target.value)}
//           required
//           placeholder="The place"
//         />
//         <br />
//         <br />

//         <label type="assignee">The Price:</label>
//         <br />
//         <input
//           type="text"
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="The Price is :"
//           required
//         />
//         <br />
//         <br />
//        <label type="title">Quantity :</label>
//         <br />
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={(e) => setQuantity(e.target.value)}
//           placeholder="Enter Quantity"
//           required
//         />
//         <br/>
//         <br/>
//         <Button
//           type="submit"
          
//           variant="primary"
//           style={{ marginRight: "5px" }}
//         >
//           Add Ticket
//         </Button>
//         <Button type="button" onClick={() => navigate("/")} variant="danger">
//           Cancel
//         </Button>
//       </form>
//     </>
//   );
// };
// export default AddingTicket;
