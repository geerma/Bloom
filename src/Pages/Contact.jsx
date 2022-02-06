import React from "react";
import BlumeLogo from '../Assets/BlumeLogo.png'

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
                <li><a>Contact Us</a></li>
                <li><a>To Do List</a></li>

            </ul>
            </div>
        </div>

    <div className="taskHeaderboxContainer">
        <h1>Contact Us</h1>
        <h2>Thank you for coming to our website</h2>
    </div>  
    </header>

            <h3>Team Members:</h3>
            <p>Geer Ma - <a href="mailto:geerm1997@gmail.com">Email</a></p>
            <p>Mihir Seth - <a href="mailto:mihirseth2005@gmail.com">Email</a></p>
            <p>Atmiya Jadvani - <a href="mailto:atmiya@my.yorku.ca">Email</a></p>
            <p>Lily Yao - <a href="mailto:lilyyao14@gmail.com">Email</a></p>
        </div>
    ); 
  };