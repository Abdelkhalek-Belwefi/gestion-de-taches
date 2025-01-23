import React, { useState } from "react";
import "./signUp.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log("Inscription réussie !");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div className="signup-wrapper">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign UP</h2>
        <div className="input-group">
          <label htmlFor="email" className="label-email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
            className="input-email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="nom" className="label-nom">Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="Entrez votre nom"
            className="input-nom"
          />
        </div>
        <div className="input-group">
          <label htmlFor="prenom" className="label-prenom">Prénom</label>
          <input
            type="text"
            name="prenom"
            id="prenom"
            placeholder="Entrez votre prénom"
            className="input-prenom"
          />
        </div>
        <div className="input-group">
          <label htmlFor="telephone" className="label-telephone">Téléphone</label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            placeholder="Entrez votre téléphone"
            className="input-telephone"
          />
        </div>
        <div className="input-group">
          <label htmlFor="adresse" className="label-adresse">Adresse</label>
          <input
            type="text"
            name="adresse"
            id="adresse"
            placeholder="Entrez votre adresse"
            className="input-adresse"
          />
        </div>
        <div className="input-group">
          <label htmlFor="ville" className="label-ville">Ville</label>
          <input
            type="text"
            name="ville"
            id="ville"
            placeholder="Entrez votre ville"
            className="input-ville"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label-password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
            className="input-password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="label-confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmez votre mot de passe"
            required
            className="input-confirmPassword"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-btn">Créer un compte</button>
      </form>
    </div>
  );
};
