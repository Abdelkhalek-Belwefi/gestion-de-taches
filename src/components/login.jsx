import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // exemple  d'authentification simple : 
    if (username === "admin" && password === "admin") {
      console.log("Login réussi !");
      history.push("/space_admin");
    } else if (username === "livreur" && password === "livreur") {
      console.log("Login réussi !");
      history.push("/space_livreur");}
      else if (username === "ouvrier" && password === "ouvrier") {
      console.log("Login réussi !");
      history.push("/space_ouvrier");
    } 
    else if(username === "personnel" && password === "personnel") {
      console.log("Login réussi !");
      history.push("/space_personnel");
    }
    else {
      console.error("Nom d'utilisateur ou mot de passe invalide.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span className="icon">👤</span>
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="icon">🔒</span>
            </div>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Se souvenir de moi
            </label>
         
            <Link to="/pdw">  Mot de passe oublié ?</Link>
          </div>
          <button type="submit" className="login-button">Connexion</button>
          <p className="signup-link">
            Vous n'avez pas de compte ?{" "}
            <p><a href="/signup" className="cr12">Sign UP</a></p>
          </p>
        </form>
      </div>
    </div>
  );
};