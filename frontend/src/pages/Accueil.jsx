import React from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <div>
      <h1>Bienvenue sur CanadaDreams</h1>
      <Link to="/inscription">
        <button>Inscription</button>
      </Link>
    </div>
  );
}
