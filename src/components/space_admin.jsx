import React, { useState } from "react";
import "./taches.css";
import { Login } from "./login";

export const Space_admin = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [action, setAction] = useState(""); // Pour gérer l'action (ajouter, modifier, supprimer)

  const categories = [
    { id: 1, name: "Personnel" },
    { id: 2, name: "Les livreurs" },
    { id: 3, name: "Les ouvriers" },
  ];

  const handleLogin = () => setIsLoggedIn(true);

  const handleAction = (actionType) => {
    setAction(actionType);
  };

  return (
    <div className="task-manager">
      <h2 className="category-title">Choisir une catégorie</h2>

      <div className="category-cards-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${selectedCategory === category.name ? "selected" : ""}`}
            onClick={() => {
              setSelectedCategory(category.name);
              setAction(""); // Réinitialiser l'action lors du changement de catégorie
            }}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      {selectedCategory ? (
        <div className="category-section">
          <h3 className="section-header">
            Tâches de la catégorie : <strong>{selectedCategory}</strong>
          </h3>

          <div className="actions-buttons">
            <button onClick={() => handleAction("ajouter")}>Ajouter</button>
            <button onClick={() => handleAction("modifier")}>Modifier</button>
            <button onClick={() => handleAction("supprimer")}>Supprimer</button>
          </div>

          {action === "ajouter" && (
            <form className="task-form">
              <legend>Ajouter une tâche</legend>
              <label htmlFor="taskName">Nom de <strong>{selectedCategory}</strong></label>
              <input type="text" name="taskName" id="taskName" />

              <label htmlFor="lieu">Lieu</label>
              <input type="text" name="lieu" id="lieu" />

              <label htmlFor="activity">Activité</label>
              <input type="text" name="activity" id="activity" />

              <label htmlFor="deadline">Date limite</label>
              <input type="date" name="deadline" id="deadline" />

              <label htmlFor="status">Statut</label>
              <input type="text" name="status" id="status" />

              <label htmlFor="timeRequired">Temps nécessaire</label>
              <input type="text" name="timeRequired" id="timeRequired" />

              <label htmlFor="comment">Commentaire</label>
              <input type="text" name="comment" id="comment" />

              <label htmlFor="priority">Priorité</label>
              <input type="text" name="priority" id="priority" />

              <button type="submit">Ajouter</button>
              <button type="reset">Annuler</button>
            </form>
          )}

          {action === "modifier" && (
            <form className="task-form">
              
                <legend>modifier un tache</legend>
                <label htmlFor="id-tache">id tache</label><br />
                <input type="text" name="id-tache" />
                <label htmlFor="taskName">Nom de <strong>{selectedCategory}</strong></label>
              <input type="text" name="taskName" id="taskName" />

              <label htmlFor="lieu">Lieu</label>
              <input type="text" name="lieu" id="lieu" />

              <label htmlFor="activity">Activité</label>
              <input type="text" name="activity" id="activity" />

              <label htmlFor="deadline">Date limite</label>
              <input type="date" name="deadline" id="deadline" />

              <label htmlFor="status">Statut</label>
              <input type="text" name="status" id="status" />

              <label htmlFor="timeRequired">Temps nécessaire</label>
              <input type="text" name="timeRequired" id="timeRequired" />

              <label htmlFor="comment">Commentaire</label>
              <input type="text" name="comment" id="comment" />

              <label htmlFor="priority">Priorité</label>
              <input type="text" name="priority" id="priority" />

              <button type="submit">modifier</button>
              <button type="reset">Annuler</button>
            </form>
           
          
          )}

          {action === "supprimer" && (
            <form action="" method="post">
              <fieldset>
                <label htmlFor="id-tache ">id-tache</label><br />
                <input type="text" name="id-tache" id="id-tache" />
                <button type="submit">effacer</button>
              </fieldset>
            </form>
          )}
        </div>
      ) : (
        <p className="no-category-message">
          Cliquez sur une carte pour afficher les tâches associées.
        </p>
      )}
    </div>
  );
};

export default Space_admin;