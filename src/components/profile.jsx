import React from "react";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile-wrapper">
      {/* En-tête du profil */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/img/profile.png" alt="Profile" />
                <p>
                   <input 
                     type="file" 
                     id="imageUpload" 
                     accept="image/*" 
                     style={{ display: 'none' }}
                   />
                   <button onClick={() => document.getElementById('imageUpload').click()}>
                     +
                   </button>
                </p>
        </div>
        <div className="profile-details">
          <h1 className="profile-name">Nom de l'utilisateur</h1>
          <h3 className="profile-role">Livreur</h3>
          <p className="profile-location">📍 Menzel Tmim</p>
        </div>
      </div>

      {/* Contenu du profil */}
      <div className="profile-body">
        <div className="profile-section">
          <h2>Travail</h2>
          <p><strong>Livreur</strong></p>
          <p>Menzel Tmim</p>
        </div>

        <div className="profile-section">
          <h2>Contact</h2>
          <p>📞 +216 29794213</p>
          <p>📧 name@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
