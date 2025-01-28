import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
           <h1>gestion de taches</h1>
           </a>
          
        </div>

     

        <div className="navbar-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>

          <ul className="nav-links">
            <li>
            <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about">  About</Link>
            </li>
            <li>
              <Link to="/contact">  contact</Link>
            </li>

           
            <li>
            <Link to="/login">  Login</Link>
            </li>
          </ul>

          <div className="dark-mode-toggle">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
