const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API CanadaDreams !" });
});

app.post('/api/inscription', (req, res) => {
  const { nom, email } = req.body;
  // Ici, tu pourrais ajouter la logique d'enregistrement (BDD, etc.)
  res.json({ success: true, nom, email });
});

app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});
