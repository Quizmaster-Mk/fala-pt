# Fala PT 🇵🇹 — V0.4

Application d’apprentissage du **portugais du Portugal (PT-PT)** pour francophones, avec une priorité à la lecture, aux dialogues écrits et à la construction de phrases.

## Démonstration TEST

https://quizmaster-mk.github.io/fala-pt/

Si le site n’est pas encore actif : GitHub → Settings → Pages → **Deploy from a branch**, branche `main`, dossier `/(root)`. Ce site sert de démonstration et **ne correspond pas à Cloudflare PROD**.

## Trois niveaux sélectionnables

| Niveau | Leçons | Dialogues | Objectif |
|---|---:|---:|---|
| **Débutant** | 6 | 2 | Salutations, commandes, prix, phrases essentielles |
| **Quelques notions** | 6 | 4 | Restaurant, téléphone, quotidien, voyages, petits récits |
| **Avancé** | 5 | 2 | Opinions, hypothèses, imprévus, travail et nuances |

**Total : 17 leçons, 68 exercices et 8 dialogues guidés.** Les niveaux correspondent à une difficulté indicative et non à une certification CECRL.

Au premier accès, l’utilisateur choisit son parcours. Il peut ensuite changer de niveau depuis *Apprendre* et *Profil* ; les leçons et dialogues terminés restent conservés en stockage local. La clé de progression précédente `fala-pt-v1` est maintenue pour éviter d’effacer les données déjà enregistrées.

## Types d’exercices

- Lire et comprendre des phrases portugaises ;
- choisir la réponse adaptée dans une situation réelle ;
- remettre les mots d’une phrase dans l’ordre ;
- taper une traduction en portugais et consulter la correction ;
- lire des dialogues, avec traduction française facultative ;
- réviser les expressions et ses erreurs.

## Limites actuelles

Cette V0.4 est une démonstration **entièrement statique** dans `index.html`, sans compte, base de données ni synchronisation interappareils. Les fonctionnalités vocales sont reportées. Les traductions écrites sont corrigées par comparaison avec une formulation attendue (tolérance aux majuscules, accents et ponctuation) ; les réponses synonymes ou variantes grammaticalement valables ne sont pas toutes reconnues.

## Développement et diffusion

La branche `main` contient l’application de démonstration destinée aux tests. Le site GitHub Pages se met à jour lors des commits si Pages est configuré.

**Ne jamais déployer Cloudflare PROD sans un accord explicite « go prod ».**
