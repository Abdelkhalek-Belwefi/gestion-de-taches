import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "./login";
import "./space_ouv.css";

export const Space_ouvrier = () => {
  const [selectedColonne, setSelectedColonne] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const colonnes = [
    { id: 1, name: "tâches d'aujourd'hui" },
    { id: 2, name: "tâches de demain" },
  ];
// basse  de donnees 
  const tasks = [
    { id: 1, colonne: "tâches de semaine", activite: "Maintenance machines", date_limite: "15 mars", statut: "a faire", temps_necessaire: "2:30", commentaire: 'Vérifier les machines X et Y', priorite: 'moyenne' },
    { id: 2, colonne: "tâches d'aujourd'hui", activite: "Préparation de matériel", date_limite: "20 avril", statut: "a faire", temps_necessaire: "4:00", commentaire: 'Préparer les outils nécessaires pour la production', priorite: 'haute' },
    { id: 3, colonne: "tâches de demain", activite: "Réparation équipement", date_limite: "5 mai", statut: "à faire", temps_necessaire: "1:30", commentaire: 'Réparer les équipements défectueux', priorite: 'moyenne' },
    { id: 4, colonne: "tâches de semaine", activite: "Contrôle de qualité", date_limite: "10 juin", statut: "a faire", temps_necessaire: "3:00", commentaire: 'Vérifier la qualité des produits fabriqués', priorite: 'haute' },
    { id: 5, colonne: "tâches d'aujourd'hui", activite: "Inventaire des matériaux", date_limite: "25 juillet", statut: "a faire", temps_necessaire: "5:00", commentaire: 'Faire l\'inventaire des stocks de matériaux', priorite: 'basse' },
    { id: 6, colonne: "tâches de demain", activite: "Nettoyage des ateliers", date_limite: "30 août", statut: "à faire", temps_necessaire: "2:00", commentaire: 'Assurer la propreté et l\'ordre des ateliers', priorite: 'moyenne' },
    { id: 7, colonne: "tâches de semaine", activite: "Réparation des outils", date_limite: "15 septembre", statut: "a faire", temps_necessaire: "3:30", commentaire: 'Réparer les outils de travail utilisés', priorite: 'haute' },
    { id: 8, colonne: "tâches d'aujourd'hui", activite: "Vérification des stocks", date_limite: "1 octobre", statut: "a faire", temps_necessaire: "1:00", commentaire: 'Vérifier les stocks de pièces détachées', priorite: 'basse' },
  ];

  const handleLogin = () => setIsLoggedIn(true);

  const faire = () => {
    // Logique pour marquer la tâche comme faite
    console.log("Tâche marquée comme faite");
  };

  // Filter tasks based on selected column
  const filteredTasks = tasks.filter((task) => task.colonne === selectedColonne);

  return (
    <div className="task-managere">
      {/* Header Section */}
      <div className="header">
        {/* Notification Bubble */}
        <div className="notification-bubble" onClick={() => setShowNotificationMenu(!showNotificationMenu)}>
          <p><img src="C:\Users\aminm\Desktop\application de gestion de taches\gestion-de-taches\src\noti.png" alt="" /></p>
          <p>notification</p>
          {showNotificationMenu && (
            <div className="notification-list">
              <p>Aucune nouvelle notification.</p>
            </div>
          )}
        </div>

        {/* Profile Bubble */}
        <div className="profile-bubble" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <p><img src="../param.png" alt="" /></p>
          <p>profile</p>
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
      <h2 className="colonne-title">Voici les tâches</h2>

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

          {selectedColonne === "tâches_de_semaine" && !isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : filteredTasks.length > 0 ? (
            <table className="task-table">
              <thead>
                <tr>
                  <th>Activité</th>
                  <th>Date limite</th>
                  <th>Statut</th>
                  <th>Temps nécessaire</th>
                  <th>Commentaire</th>
                  <th>Priorité</th>
                  <th>Faire</th>
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
                    <td><button className="bt3" onClick={faire}>marque comme fait</button></td>
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

export default Space_ouvrier;
