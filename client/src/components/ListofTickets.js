import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_tickets } from "../redux/actions";
import Ticket from "./Ticket";

const ListofTickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets)||[];

  useEffect(() => {
    dispatch(getting_all_tickets());
  }, [dispatch]);

  return (
    <>
      
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
          <div>
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
                marginRight: "30px",
                justifyContent: "space-around",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {Array.isArray(tickets) &&
                tickets.map((ticket) => (
                  <Ticket key={ticket._id} {...ticket} />
                ))}
            </div>
          </div>
        </div>
    </>
  );
};
export default ListofTickets;
