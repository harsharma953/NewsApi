// import Newscard from './components/Newscard';
import Navbar from './components/Navbar';
import React from 'react';
import { useEffect, useState } from "react";
// import './components/cssfile/Newscard.css';
// import './components/cssfile/navbar.css';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Newsitem from './components/Newsitem';
import Signup from './components/Signup';
import Login from './components/Login';
import { auth } from './Firebase';
import { Signout } from './components/Signout';
import Page from './components/Page';

function App () {
  const[username, setUserName] = useState("");
    useEffect(()=>{
        auth.onAuthStateChanged( (user)=>{
            if (user) {
                setUserName(user.displayName);
            }
            else{
                setUserName("")
            }
        })
    },[])
    return (
      <>
    <Router>
    <Navbar username = {username}/>
    <Routes>
    <Route exact path="/sports"  element={<Newsitem key="sports" search="Sports"/>}/>
    <Route exact path="/business" element={<Newsitem key="business"  search="Business"/>}/>
    <Route exact path="/technology" element={<Newsitem key="technology" search="Technology"/>}/>
    <Route exact path="/science" element={<Newsitem key="science" search="Science"/>}/>
    <Route exact path="/health" element={<Newsitem key="health" search="Health"/>}/>
    <Route exact path="/" element={<Newsitem  key="general" search="General"/>}/>
    <Route exact path="/entertainment" element={<Newsitem key="entertainment" search="Entertainment"/>}/>
    <Route exact path = "/Signup" element={<Signup/>}></Route>
    <Route exact path = "/Login" element={<Login/>}></Route>
    <Route exact path = "/Signout" element={<Signout/>}></Route>
    <Route exact path = "/Page" element={<Page/>}></Route>
    </Routes>
    </Router>
    </>
    )
}

export default App;

