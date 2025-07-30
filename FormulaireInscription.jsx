import React, { useState } from 'react';

export default function FormulaireInscription({ onSuccess }) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess({ nom, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          data-testid="nom-input"
          value={nom}
          onChange={e => setNom(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          data-testid="email-input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <button data-testid="submit-btn" type="submit">Valider</button>
      {submitted && <div data-testid="success-message">Inscription réussie !</div>}
    </form>
  );
         }
