import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
// import Ticket from "./components/Ticket";
import Payment from "./components/Payment";
import AddingTicket from "./components/AddingTicket";
import ListofTickets from "./components/ListofTickets";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          {/* <Route path="tickets" element={<Ticket />} /> */}
          <Route path="payment" element={<Payment/>}/>
          <Route path="listoftickets" element={<ListofTickets/>}/>
          <Route path="addTicket" element={<AddingTicket/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
