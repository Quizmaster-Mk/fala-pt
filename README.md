# Fala PT 🇵🇹

Application d'apprentissage du **portugais du Portugal (PT-PT)** orientée compréhension orale et conversations du quotidien.

## Démonstration

Après activation de GitHub Pages (Settings → Pages → Deploy from a branch → `main` / `/(root)`) :

**https://quizmaster-mk.github.io/fala-pt/**

La prévisualisation GitHub Pages sert d'environnement **TEST**. Aucun changement n'est fait sur la production Cloudflare.

## Version V0.2

- 12 leçons guidées, 48 exercices ;
- 6 dialogues interactifs : café, famille, Porto, marché, hôtel, week-end ;
- compréhension, répétition et pratique de situations concrètes ;
- synthèse vocale du navigateur lorsque disponible (voix PT-PT selon l'appareil) ;
- suivi de progression enregistré uniquement dans le navigateur.

## Limites de cette première version

Ce fichier `index.html` est une démonstration autonome. Il n'y a pas encore de reconnaissance vocale du microphone, de véritable professeur conversationnel IA, ni de synchronisation de comptes. La synthèse vocale dépend de la configuration de l'appareil et ne remplace pas des enregistrements par des locuteurs natifs.

## Fonctionnement

Le site est entièrement statique : aucune clé API ni serveur nécessaire pour le tester. Ouvrir `index.html` directement dans le navigateur, ou le publier via GitHub Pages.

**Règle projet :** ne jamais déployer ou modifier la PROD Cloudflare sans accord explicite « go prod ».
