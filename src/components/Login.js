import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const[value, setValue] = useState({
        email:"",
        pass:"",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, value.email, value.pass).then((user)=>{
            navigate("/");
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={value.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setValue((prev)=>({...prev, email: e.target.value }))}}/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={value.pass} className="form-control" id="exampleInputPassword1" onChange={(e)=>{setValue((prev)=>({...prev, pass: e.target.value }))}}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login
