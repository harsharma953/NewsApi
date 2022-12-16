import React, {useState} from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Firebase';


import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
    const[value, setValue] = useState({
        name:"",
        email:"",
        pass:"",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, value.email, value.pass)
  .then(async(userCredential) => {
    const user = userCredential.user;
    await updateProfile(user, {
        displayName: value.name
    })
    console.log(user);
    navigate("/");

  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    return (
        <div>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name </label>
                    <input type="text" value={value.name} className="form-control" id="Name" aria-describedby="emailHelp"  onChange={(e)=>{setValue((prev)=>({...prev, name: e.target.value }))}}/>
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setValue((prev)=>({...prev, email: e.target.value }))}} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setValue((prev)=>({...prev, pass: e.target.value }))}} />
                </div>
                
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Signup Now</button>
                <div id="emailHelp" className="form-text">If You are already registered <a href='/Login'>Login Now!</a></div>
            </form>
        </div>
    )
}

export default Signup
