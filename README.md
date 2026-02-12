# 🐰 baddummy

Portfolio personnel de Romain Tabary.

## 🎯 Le projet

Site vitrine moderne avec landing page et CV interactif, développé en React avec déploiement automatisé. Parce qu'avoir un portfolio en 2026, c'est comme avoir un profil LinkedIn, mais en mieux.

**En ligne** : [À venir]

## ⚡ Stack technique

- **Frontend** : React 18 + React Router + CSS3 (animations parallax)
- **Build** : Vite
- **Déploiement** : Docker + nginx
- **CI/CD** : GitHub Actions
  - Releases automatiques avec semantic versioning
  - Build et push sur Google Container Registry
  - Conventional commits pour les versions
- **Hosting** : GCP Container Registry

## 📂 Structure

```
baddummy/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/          # Pages (Home, CV)
│   └── styles/         # CSS global
├── public/             # Assets statiques
├── .github/
│   └── workflows/      # CI/CD (release + GCP deploy)
├── Dockerfile          # Build multi-stage nginx
└── docker-compose.yml  # Orchestration
```
