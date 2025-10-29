# Nutrition Scoring App

Application de calcul de score nutritionnel pour les aliments, composée d'une API backend FastAPI et d'un frontend React.js.

## 📋 Description

Cette application permet de calculer et d'analyser les scores nutritionnels des aliments. Elle fournit une interface utilisateur intuitive pour entrer les informations nutritionnelles et obtenir instantanément un score de qualité nutritionnelle.

## 🏗️ Structure du Projet

```
nutrition-scoring-app/
├── backend/          # API FastAPI pour le scoring nutritionnel
│   ├── app/
│   │   ├── main.py           # Point d'entrée de l'API
│   │   ├── models.py         # Modèles de données
│   │   ├── scoring.py        # Logique de calcul des scores
│   │   └── routes.py         # Endpoints API
│   ├── requirements.txt      # Dépendances Python
│   └── README.md            # Documentation backend
│
└── frontend/         # Application React.js
    ├── src/
    │   ├── components/
    │   │   ├── Calculator.jsx    # Formulaire de calcul
    │   │   └── ScoreDisplay.jsx  # Affichage des résultats
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── README.md            # Documentation frontend
```

## 🚀 Démarrage en Local

### Prérequis

- Python 3.9 ou supérieur
- Node.js 16 ou supérieur
- npm ou yarn

### Backend (API FastAPI)

1. Naviguer vers le dossier backend :
```bash
cd backend
```

2. Créer un environnement virtuel :
```bash
python -m venv venv
source venv/bin/activate  # Sur Windows: venv\Scripts\activate
```

3. Installer les dépendances :
```bash
pip install -r requirements.txt
```

4. Lancer le serveur de développement :
```bash
uvicorn app.main:app --reload
```

L'API sera accessible sur `http://localhost:8000`

Documentation interactive disponible sur `http://localhost:8000/docs`

### Frontend (React.js)

1. Naviguer vers le dossier frontend :
```bash
cd frontend
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:5173`

## 🔧 Fonctionnalités

### Backend
- API RESTful pour le calcul des scores nutritionnels
- Validation des données nutritionnelles
- Algorithme de scoring basé sur les standards nutritionnels
- Documentation automatique avec Swagger/OpenAPI

### Frontend
- Formulaire interactif pour saisir les informations nutritionnelles
- Calcul en temps réel des scores
- Affichage visuel des résultats (graphiques, indicateurs)
- Interface responsive et moderne

## 📡 API Endpoints

- `POST /api/score` - Calculer le score nutritionnel d'un aliment
- `GET /api/health` - Vérifier l'état de l'API

## 🛠️ Technologies Utilisées

### Backend
- FastAPI
- Pydantic (validation des données)
- Uvicorn (serveur ASGI)

### Frontend
- React.js
- Vite (build tool)
- Axios (requêtes HTTP)
- CSS3 / TailwindCSS

## 📝 Licence

Ce projet est sous licence MIT.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
