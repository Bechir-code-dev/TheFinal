import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_events } from "../redux/actions"; // Adjust the path if needed
import EventCard from "./EventCard"; // Adjust the path if needed

const ListOfEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getting_all_events());
  }, [dispatch]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1478112544096-20cf77df3a88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "3rem",
          marginBottom: "40px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        All Events
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event._id}
              _id={event._id}
              name={event.name}
              date={event.date}
              location={event.location}
            />
          ))
        ) : (
          <h2 style={{ color: "white" }}>No events available</h2>
        )}
      </div>
    </div>
  );
};

export default ListOfEvents;
