import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import AddingTicket from "./components/AddingTicket";
import ListofTickets from "./components/ListofTickets";
import OneUser from "./components/OneUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="payment" element={<Payment />} />
          <Route path="listoftickets" element={<ListofTickets />} />
          <Route path="addTicket" element={<AddingTicket />} />
          <Route path="OneUser" element={<OneUser />} />
          <Route path="ListOfUsers" element={<ListOfUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
