import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getting_all_tickets } from "../redux/actions";
import Ticket from './Ticket'

const ListofTickets = () =>{
    const tickets = useSelector(state => state.tickets) || [];
    console.log(tickets)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getting_all_tickets());
    },[dispatch,tickets]);
    return (
        <>
        {Array.isArray(tickets)&& tickets.map(Element => <Ticket key={Element._id} {...Element}/>)}
        </>
    )
}
export default ListofTickets;