import React, { useState } from "react";
import "./pdw.css";
const Pdw = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simuler la validation d'email
    if (!email) {
      setError("L'email est requis.");
      setMessage("");
      return;
    }

    // Vous pouvez ajouter ici la logique pour envoyer une requête à une API dans un vrai scénario.
    // Exemple : Axios.post('/reset-password', { email })...
    
    // Simuler la réponse
    setMessage(`Un lien de réinitialisation de mot de passe a été envoyé à ${email}.`);
    setError("");
  };

  return (
    <div className="body-pdw">
    <div className="forgot-password-container">
      <h2>Mot de passe oublié ?</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Entrez votre email</label>
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <button type="submit">rechercher</button>
      </form>
    </div>
    </div>
  );
};

export default Pdw;
