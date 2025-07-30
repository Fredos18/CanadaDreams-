import React, { useState } from "react";

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email }),
      });
      const data = await response.json();
      setSuccess(data.success);
    } catch (error) {
      alert("Erreur lors de l'inscription");
    }
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
