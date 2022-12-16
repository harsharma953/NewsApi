import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'


export const Signout = () => {
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        signOut(auth).then(()=>{
            console.log("Signed Out successfully");
            navigate("/");
        }).catch((error)=>{
            console.log(error.message);
        })
    }
  return (
    <>
    <div>Are you sure you wnat to Sign out !</div>
    <div><button type="button" className="btn btn-primary" onClick={handleSubmit}>Signout Now</button></div>
    </>
  )
}
