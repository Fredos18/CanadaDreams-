import React, { useState } from "react";

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // Ici tu peux ajouter l'appel API pour enregistrer l'utilisateur
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input value={nom} onChange={e => setNom(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Valider</button>
      </form>
      {success && <div>Inscription réussie !</div>}
    </div>
  );
    }
