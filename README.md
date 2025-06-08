# mon-cabinet-osteo

Site web du cabinet d’ostéopathie de Corentin Bacconnais à Saint-Brevin-les-Pins, réalisé avec [Next.js](https://nextjs.org).

## Fonctionnalités principales

- Présentation du cabinet, des consultations et de l’équipe
- Prise de rendez-vous en ligne (Doctolib)
- Affichage des avis Google en temps réel
- Responsive design (mobile & desktop)
- Accessibilité et SEO optimisés

## Démarrage local

Installez les dépendances puis lancez le serveur de développement :

```bash
npm install
npm run dev
# ou
yarn install && yarn dev
# ou
pnpm install && pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Variables d’environnement

Créez un fichier `.env.local` à la racine avec :

```
GOOGLE_PLACE_API_KEY=...
GOOGLE_PLACE_ID=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Déploiement

Le site est optimisé pour un déploiement sur [Vercel](https://vercel.com/).
Ajoutez vos variables d’environnement dans les paramètres du projet Vercel.

## Structure du projet

- `/src/app` : pages et layout Next.js
- `/src/components` : composants React réutilisables
- `/src/lib` : fonctions utilitaires et appels API
- `/src/types` : définitions TypeScript

## Accessibilité & SEO

- Navigation clavier et liens d’accès rapide
- Balises sémantiques et ARIA
- Métadonnées Open Graph et Twitter Card

## Auteur

Corentin Bacconnais – [baccosteo.fr](https://www.baccosteo.fr)

---

> Ce projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour l’optimisation des polices.
