# Fala PT 🇵🇹

Application d'apprentissage du **portugais du Portugal (PT-PT)** orientée lecture, expression écrite et dialogues du quotidien.

## Démonstration

Après activation de GitHub Pages (Settings → Pages → Deploy from a branch → `main` / `/(root)`) :

**https://quizmaster-mk.github.io/fala-pt/**

La prévisualisation GitHub Pages sert d'environnement **TEST**. Aucun changement n'est fait sur la production Cloudflare.

## Version V0.3 — priorité à l'écrit

- 12 leçons guidées, 48 exercices ;
- 6 dialogues interactifs : café, famille, Porto, marché, hôtel, week-end ;
- compréhension écrite, phrases à remettre dans l'ordre, réponses à choisir et traductions à taper ;
- dialogues textuels avec transcription visible, traduction facultative et corrections ;
- voix et audio volontairement mis de côté pour cette étape ;
- suivi de progression enregistré uniquement dans le navigateur.

## Limites de cette première version

Ce fichier `index.html` est une démonstration autonome. Il n'y a pas encore de voix, de reconnaissance vocale du microphone, de véritable professeur conversationnel IA, ni de synchronisation de comptes. La vérification des réponses tapées utilise la formulation attendue avec une tolérance aux majuscules, accents et ponctuation (les variantes grammaticalement acceptables ne sont pas toutes reconnues).

## Fonctionnement

Le site est entièrement statique : aucune clé API ni serveur nécessaire pour le tester. Ouvrir `index.html` directement dans le navigateur, ou le publier via GitHub Pages.

**Règle projet :** ne jamais déployer ou modifier la PROD Cloudflare sans accord explicite « go prod ».
