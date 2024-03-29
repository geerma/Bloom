import React from "react";
import BlumeLogo from '../Assets/BlumeLogo.png'
import {signOut} from "firebase/auth";
import { auth } from '../components/Firebase';
import { useHistory, Link } from 'react-router-dom';

export const Contact = () => {


    const history = useHistory();
 
    const logout = async () => {
        await signOut(auth);
  
        history.push('/')
      };


    return (
        <div>

    <header className="contactUsHeader">
        <div className='navbar'>
            <div className='navbarContainer1'>
                <img className='logo-image' src={BlumeLogo} alt="blume.clarity" width="150px" height="35px"></img>
            </div>
            <div className='navbarContainer2'>
            <ul>
            <li><a><Link onClick={logout}>Log Out</Link></a></li>
           <li><a><Link to="/contactus">Contact Us</Link></a></li>
            <li><a><Link to="/todolist">To Do List</Link></a></li>
            <li><a><Link to="/journal">Journal Entries</Link></a></li>
            <li><a><Link to="/home">Journal Form</Link></a></li>

 
            </ul>
            </div>
        </div>

    <div className="taskHeaderboxContainer">
        <h1 className="contactUsTitle">Contact Us</h1>
        <h2>Thank you for coming to our website</h2>
    </div>  

    </header>

        <div className="hackerContainer">
            <h1 className="teamText">Team Behind Blume</h1>
            <p className="hacker">Geer Ma - <a href="mailto:geerm1997@gmail.com">Email</a></p>
            <p className="hacker">Mihir Seth - <a href="mailto:mihirseth2005@gmail.com">Email</a></p>
            <p className="hacker">Atmiya Jadvani - <a href="mailto:atmiya@my.yorku.ca">Email</a></p>
            <p className="hacker">Lily Yao - <a href="mailto:lilyyao14@gmail.com">Email</a></p>
        </div>
        </div>
    ); 
  };