import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import AddingTicket from "./components/AddingTicket";
import ListofTickets from "./components/ListofTickets";
import OneUser from "./components/OneUser";
import ListOfUsers from "./components/ListOfUsers";
import AddUser from "./components/AddUser";
import ListOfEvents from "./components/ListofEvents";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="listoftickets" element={<ListofTickets />} />
          <Route path="addTicket" element={<AddingTicket />} />
          <Route path="OneUser" element={<OneUser />} />
          <Route path="ListOfUsers" element={<ListOfUsers />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="/events" element={<ListOfEvents />} />
          <Route path="/add-event" element={<AddEvent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
