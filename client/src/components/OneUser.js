import React from "react";
import Card from "react-bootstrap/Card";

const OneUser = ({ fullname, email, num, image }) => {


  return (
    <>
      <Card style={{ width: "18rem" , marginTop:'50px'}}>
        <Card.Img src={image} alt="userImage" />
        <Card.Body>
          <Card.Title> Mr or Ms : {fullname} </Card.Title>
          <Card.Text>
            Email : {email} 
            <br/>
            The phone number is : {num}
            <br/>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default OneUser;
