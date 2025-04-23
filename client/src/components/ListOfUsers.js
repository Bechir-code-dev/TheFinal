import React, { useEffect } from "react";
import OneUser from "./OneUser";
import { useDispatch, useSelector } from "react-redux";
import { authorized } from "../redux/actions";

const ListOfUsers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <>
      {Array.isArray(user) &&
        user.map((Element) => <OneUser key={Element._id} {...Element} />)}

      {/* {user && !Array.isArray(user) && <OneUser key={user._id} {...user} />} */}

      {/* {user && !Array.isArray(user) && [user].map((Element) => (
  <OneUser key={Element._id} {...Element} />
))} */}

      {/* {Array.isArray(user) &&
  user.map((Element) => (
    <OneUser
      key={Element._id}
      fullname={Element.fullname}
      email={Element.email}
      num={Element.num}
      image={Element.image}
    />
  ))} */}
    </>
  );
};

export default ListOfUsers;
