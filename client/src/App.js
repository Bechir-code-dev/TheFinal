import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
