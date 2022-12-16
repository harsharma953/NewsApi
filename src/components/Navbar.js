import React from "react";
import "./cssfile/navbar.css"
import { auth } from "../Firebase";

// import Newsitem from "./Newsitem"
import {
    Link
} from "react-router-dom";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
let searching_value;
function Navbar(props) {

    const [isActive, setIsActive] = useState(false);
    // const [text,settext] = useState();
    let attt;
    const handle_search = (event) => {
        attt = event.target.value;
        //    console.log(attt);
    }
    const send_value = () => {
        // settext(attt);
        // console.log(text);
        searching_value = attt;
    }
    return (
        <div className="body">
            <div className="navbar">
                <div className="logo">
                    <img src="https://cdn.dribbble.com/users/2404/screenshots/15065505/media/c3d68d663aedcc0479328838167e0333.png?compress=1&resize=640x480&vertical=top" alt="logo" />
                </div>
                <div className="item">
                    <ul>
                        <li><Link to="/Page" style={{margin:"-68px"}}>News Pdf</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/">General</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        {/* <li><Link to="/contact">Contact</Link></li> */}
                        <li><Link to="/Signup">Sign Up</Link></li>
                        <li><Link to="/Signout">{props.username}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mid">
                <div className="line typewriter">
                    <h2>Explore the Latest News </h2>
                </div>
                <div className="search" onChange={handle_search}>
                    <input type="text" />
                    <button onClick={send_value} >Search</button>
                </div>
            </div>
        </div>

    )
}
export default Navbar;
export { searching_value };



