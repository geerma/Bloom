import React from "react";
import BlumeLogo from '../Assets/BlumeLogo.png'
import {Link} from 'react-router-dom'

export const Contact = () => {
    return (
        <div>

    <header className="taskHeader">
        <div className='navbar'>
            <div className='navbarContainer1'>
                <img className='logo-image' src={BlumeLogo} alt="blume.clarity" width="150px" height="35px"></img>
            </div>
            <div className='navbarContainer2'>
            <ul>
            <li><a><Link to="/contactus">Contact Us</Link></a></li>
            <li><a><Link to="/todolist">To Do List</Link></a></li>
            <li><a><Link to="/journal">Journal</Link></a></li>

            </ul>
            </div>
        </div>

    <div className="taskHeaderboxContainer">
        <h1>Contact Us</h1>
        <h2>Thank you for coming to our website</h2>
    </div>  

    </header>

        <h1 className="hacker">Team Behind Blume</h1>
        <div>
            <p className="hacker">Geer Ma - <a href="mailto:geerm1997@gmail.com">Email</a></p>
            <p className="hacker">Mihir Seth - <a href="mailto:mihirseth2005@gmail.com">Email</a></p>
            <p className="hacker">Atmiya Jadvani - <a href="mailto:atmiya@my.yorku.ca">Email</a></p>
            <p className="hacker">Lily Yao - <a href="mailto:lilyyao14@gmail.com">Email</a></p>
        </div>
        </div>
    ); 
  };