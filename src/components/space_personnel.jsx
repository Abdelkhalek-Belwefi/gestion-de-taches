import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./space_pers.css";

export const Space_personnel = () => {
  const [selectedColonne, setSelectedColonne] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const colonnes = [
    { id: 1, name: "tâches d'aujourd'hui" },
    { id: 2, name: "tâches de demain" },
  ];

  const tasks = [
    { id: 1, colonne: "tâches d'aujourd'hui", activite: "Gestion des stocks", date_limite: "15 mars", statut: "a faire", temps_necessaire: "2:30", commentaire: "Vérifier l'état des stocks", priorite: "moyenne" },
    { id: 2, colonne: "tâches d'aujourd'hui", activite: "Réunion avec les équipes", date_limite: "20 avril", statut: "a faire", temps_necessaire: "4:00", commentaire: "Discuter des objectifs de la semaine", priorite: "haute" },
    { id: 3, colonne: "tâches de demain", activite: "Planification des ressources", date_limite: "5 mai", statut: "à faire", temps_necessaire: "1:30", commentaire: "Planifier les besoins en personnel", priorite: "moyenne" },
    { id: 4, colonne: "tâches de semaine", activite: "Suivi des performances", date_limite: "10 juin", statut: "a faire", temps_necessaire: "3:00", commentaire: "Analyser les résultats", priorite: "haute" },
  ];

  const handleLogin = () => setIsLoggedIn(true);

  // Filter tasks based on selected column
  const filteredTasks = tasks.filter((task) => task.colonne === selectedColonne);

  return (
    <div className="task-managerp">
      {/* Header Section */}
      <div className="header">
        {/* Notification Bubble */}
        <div className="notification-bubble" onClick={() => setShowNotificationMenu(!showNotificationMenu)}>
          <p><img src="../noti.png" alt="" /></p>
          <p>Notifications</p>
          {showNotificationMenu && (
            <div className="notification-list">
              <p>Aucune nouvelle notification.</p>
            </div>
          )}
        </div>

        {/* Profile Bubble */}
        <div className="profile-bubble" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <p><img src="../param.png" alt="" /></p>
          <p>Profil</p>
          {showProfileMenu && (
            <div className="profile-menu">
              <ul>
                <li><img src="image utilisateur" alt="" />...................@livreur.com</li>
                <li> <Link to="/profile">  profile</Link></li>
                <li> <Link to="/parametre">  parametre</Link></li>
                <li> <Link to="/login">  deconnection</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <h2 className="colonne-title">Voilà les tâches</h2>

      <div className="colonne-cards-container">
        {colonnes.map((col) => (
          <div
            key={col.id}
            className={`colonne-card ${selectedColonne === col.name ? "selected" : ""}`}
            onClick={() => setSelectedColonne(col.name)}
          >
            <h3>{col.name}</h3>
          </div>
        ))}
      </div>

      {selectedColonne ? (
        <div className="colonne-section">
          <h3 className="section-head">
            Voilà : <strong>{selectedColonne}</strong>
          </h3>
          {filteredTasks.length > 0 ? (
            <table className="task-table">
              <thead>
                <tr>
                  <th>Activité</th>
                  <th>Date Limite</th>
                  <th>Statut</th>
                  <th>Temps Nécessaire</th>
                  <th>Commentaire</th>
                  <th>Priorité</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.activite}</td>
                    <td>{task.date_limite}</td>
                    <td>{task.statut}</td>
                    <td>{task.temps_necessaire}</td>
                    <td>{task.commentaire}</td>
                    <td>{task.priorite}</td>
                    <td><button className="bt3">Marquer comme fait</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucune tâche trouvée pour cette colonne.</p>
          )}
        </div>
      ) : (
        <p>Sélectionnez une colonne pour voir les tâches.</p>
      )}
    </div>
  );
};

export default Space_personnel;
