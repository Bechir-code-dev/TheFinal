import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { adding_user, authorized, uploadImage } from "../redux/actions";
import { useNavigate } from "react-router";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [num, setNum] = useState(0);
  const [role, setRole] = useState("");

  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  const image = useSelector(state => state.image);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadImage(formData));
  };

  const newUser = {
    fullname,
    email,
    password,
    image,
    role,
    num,
  };

  const addingUser = (e) => {
    e.preventDefault();
    dispatch(adding_user(newUser));
    navigate(`/ListOfUsers`);
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Add a New User</h2>
        <hr/>
        <Form onSubmit={addingUser}>
          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Full Name</Form.Label>
            <Form.Control
              style={styles.input}
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Email Address</Form.Label>
            <Form.Control
              style={styles.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Password</Form.Label>
            <Form.Control
              style={styles.input}
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Phone Number</Form.Label>
            <Form.Control
              style={styles.input}
              type="number"
              placeholder="Enter your phone number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Role (admin/client)</Form.Label>
            <Form.Control
              style={styles.input}
              type="text"
              placeholder="admin or client"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Upload Profile Image</Form.Label>
            <Form.Control
              style={styles.input}
              type="file"
              onChange={handleImageUpload}
            />
          </Form.Group>

          <Button variant="success" type="submit" style={styles.button}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    minHeight: "100vh",
    backgroundImage: "url('https://images3.alphacoders.com/212/thumb-1920-212835.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2em",
    color: "#333",
  },
  label: {
    fontWeight: "600",
    fontSize: "1.1em",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1em",
  },
  button: {
    width: "100%",
    marginTop: "20px",
    fontSize: "1.2em",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default AddUser;














// import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useDispatch, useSelector } from "react-redux";
// import { adding_user, authorized, uploadImage } from "../redux/actions";
// import { useNavigate } from "react-router";

// const AddUser = ()=> {
//   const dispatch = useDispatch()
// const navigate= useNavigate()
// const [fullname , setFullname]= useState("")
// const [email ,setEmail]= useState("")
// const [password , setPassword]= useState("")
// const[num , setNum]= useState(0)
// const[role , setRole]= useState("")



//  useEffect(()=>{
//      dispatch(authorized());
//  }, [dispatch]);


// const image = useSelector(state=>state.image)

// const handleImageUpload = (e) => {
//    const file = e.target.files[0];
//    const formData = new FormData();
//    formData.append("image", file);
//    dispatch(uploadImage(formData));
//  };

//  const newOne= {
//     fullname,
//     email,
//     password,
//     image,
//     role,
//     num,
//   }
// const addingUser=(e)=> {
//   e.preventDefault()
//   dispatch(adding_user(newOne))
//   navigate(`/ListOfUsers`)
// }

//     return(<>
//     <Form>
//     <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>FullName</Form.Label>
//         <Form.Control type="text" placeholder="name" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email Address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
//       </Form.Group>
        
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Phone Number</Form.Label>
//         <Form.Control type="number" placeholder="phone number"  value={num} onChange={(e)=>setNum(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Role: (admin/client)</Form.Label>
//         <Form.Control type="text" placeholder="admin/client"  value={role} onChange={(e)=>setRole(e.target.value)}/>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Upload Image</Form.Label>
//         <Form.Control
//           type="file"
//           onChange={handleImageUpload}
//         />
//       </Form.Group>
//       <Button onClick={addingUser} variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </>)
// }
// export default AddUser