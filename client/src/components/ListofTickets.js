import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_tickets } from "../redux/actions";
import Ticket from "./Ticket";
import { Outlet, useLocation } from "react-router-dom";


const ListofTickets = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const tickets = useSelector((state) => state.tickets);
  const isonListofTickets = location.pathname === '/listoftickets';

  useEffect(() => {
    dispatch(getting_all_tickets());
  }, [dispatch]);

  return (
    <>
    {isonListofTickets ? (
        <div
          style={{
            backgroundImage:
              "url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/308900/308991.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "40px 20px",
            position: "relative",
          }}
        >
          <div
            // style={{
            //   backgroundColor: "rgba(255, 255, 255, 0.85)",
            //   padding: "30px",
            //   borderRadius: "15px",
            //   maxWidth: "1200px",
            //   margin: "0 auto",
            // }}
          >
            <h1
              style={{
                fontSize: "3em",
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                marginBottom: "30px",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontFamily: "fantasy",
              }}
            >
              Welcome to Your Ultimate Matchday Experience
            </h1>
            <div
        style={{
          display: "flex",
          // gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          // gap: "none",
          // padding: "0 10px",
          marginRight:'30px',
          justifyContent:'space-around',
          flexDirection:'row',
          flexWrap:'wrap'
        }}
      >
        {Array.isArray(tickets) &&
          tickets.map((ticket) => (
            <Ticket key={ticket._id} {...ticket} />
          ))}
   
            {/* {Array.isArray(tickets) &&
              tickets.map((Element) => (
                <Ticket key={Element._id} {...Element} />
              ))} */}
          </div>
        </div>
        </div>
      ) : (
        <Outlet />
      )}
     
    </>
  );
};
export default ListofTickets;