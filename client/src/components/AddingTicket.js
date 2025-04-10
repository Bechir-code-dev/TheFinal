import React from "react";
import Button from 'react-bootstrap/Button';


const AddingTicket = () =>{



return(
    <>
<h2 style={{textDecoration:'underline'}}>Add Your Ticket</h2><br/><br/>
<form action="/add-ticket" method="post">
  <label for="title">Ticket Title:</label><br/>
  <input type="text" id="title" name="title" placeholder="Enter ticket title" required/><br/><br/>
  <label for="description">Bookingdate:</label><br/>
  <input id="description" name="description" placeholder="YYYY/MM/DD" required></input><br/><br/>
  <label for="priority">The Place:</label><br/>
  <select id="priority" name="priority" required>
    <option>Select The Place</option>
    <option>Virage</option>
    <option>Pelouse</option>
    <option>Enceinte Supérieure    </option>
    <option>Enceinte inférieure    </option>
    <option>Tribune</option>
    <option>Loge</option>
  </select><br/><br/>

  <label for="assignee">The Price:</label><br/>
  <input type="text" placeholder="The Price is :" required/><br/><br/>

  <Button type="submit" variant="primary" style={{marginRight:'5px'}}>Add Ticket</Button>
  <Button type="button" variant="danger">Cancel</Button>
</form>
    </>
)

}
export default AddingTicket;