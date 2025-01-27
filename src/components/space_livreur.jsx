import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./space-livreur.css";

export const  Space_livreur = () => {
  const [selectedColumn, setSelectedColumn] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const columns = [
    { id: 1, name: "tâches d'aujourd'hui" },
    { id: 2, name: "tâches de demain" },
  ];
// en va echanger ca avec une basse de donnees 
  const tasks = [
    { id: 1, column: "tâches d'aujourd'hui", location: "Sousse", activity: "Distribution", deadline: "20 avril", status: "à faire", timeNeeded: "4:00", comment: "slslsl", priority: "basse" },
    { id: 2, column: "tâches d'aujourd'hui", location: "Gabès", activity: "Stockage", deadline: "25 juillet", status: "à faire", timeNeeded: "5:00", comment: "slslsl", priority: "basse" },
    { id: 3, column: "tâches d'aujourd'hui", location: "Gafsa", activity: "Réception", deadline: "1 octobre", status: "à faire", timeNeeded: "1:00", comment: "slslsl", priority: "haute" },
    { id: 3, column: "tâches d'aujourd'hui", location: "Gafsa", activity: "Réception", deadline: "20 novembre", status: "à faire", timeNeeded: "1:00", comment: "slslsl", priority: "haute" },
    { id: 3, column: "tâches d'aujourd'hui", location: "Gafsa", activity: "Réception", deadline: "1 janvier", status: "à faire", timeNeeded: "1:00", comment: "slslsl", priority: "haute" },
    { id: 3, column: "tâches d'aujourd'hui", location: "Gafsa", activity: "Réception", deadline: "2 février", status: "à faire", timeNeeded: "1:00", comment: "slslsl", priority: "haute" },
  ];
  

  const handleLogin = () => setIsLoggedIn(true);


  const filteredTasks = tasks.filter((task) => task.column === selectedColumn);

  return (
    <div className="space-livreur">
    
      <div className="header-section">
        
        <div className="notification-bubble" onClick={() => setShowNotificationMenu(!showNotificationMenu)}>
          <p><img src="C:\noti.png" alt="" /></p>
          <p>Notification</p>
          {showNotificationMenu && (
            <div className="notification-dropdown">
              <p>Aucune nouvelle notification.</p>
            </div>
          )}
        </div>

       {/* en va construire le menu de profil */}
        <div className="profile-bubble" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <p><img src='../param.png' alt="" /></p>
          <p>Profile</p>
          {showProfileMenu && (
            <div className="profile-dropdown">
              <ul>
                <li><img src="image utilisateur" alt="" />nom de utulisateur@livreur.com</li>
                <br />
                <li> <Link to="/profile"> profile</Link></li>
                <li> <Link to="/parametre">  parametre</Link></li>
                <li> <Link to="/login">  deconnection</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <h2 className="tasks-title">Voilà les tâches</h2>

      <div className="column-cards-container">
        {columns.map((col) => (
          <div
            key={col.id}
            className={`column-card ${selectedColumn === col.name ? "selected" : ""}`}
            onClick={() => setSelectedColumn(col.name)}
          >
            <h3>{col.name}</h3>
          </div>
        ))}
      </div>

      {selectedColumn ? (
        <div className="column-section">
          <h3 className="section-title">
            Voilà : <strong>{selectedColumn}</strong>
          </h3>
          {filteredTasks.length > 0 ? (
            <table className="task-table">
              <thead>
                <tr>
                  <th>Lieu</th>
                  <th>Activité</th>
                  <th>Date Limite</th>
                  <th>Statut</th>
                  <th>Temps Nécessaire</th>
                  <th>Commentaire</th>
                  <th>Priorité</th>
                  <th>Faire</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.location}</td>
                    <td>{task.activity}</td>
                    <td>{task.deadline}</td>
                    <td>{task.status}</td>
                    <td>{task.timeNeeded}</td>
                    <td>{task.comment}</td>
                    <td>{task.priority}</td>
                    <td><button className="action-btn">marquer comme fait</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p_black">Aucune tâche trouvée pour cette colonne.</p>
          )}
        </div>
      ) : (
        <p className="p_black">Sélectionnez une colonne pour voir les tâches.</p>
      )}
    </div>
  );
};
export default Space_livreur;