# Fala PT 🇵🇹 — V0.5

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

**Total : 17 leçons, 101 exercices et 8 dialogues guidés.** Les niveaux correspondent à une difficulté indicative et non à une certification CECRL.

Au premier accès, l’utilisateur choisit son parcours. Il peut ensuite changer de niveau depuis *Apprendre* et *Profil* ; les leçons et dialogues terminés restent conservés en stockage local. La clé de progression précédente `fala-pt-v1` est maintenue pour éviter d’effacer les données déjà enregistrées.

## Exercices écrits V0.5

Chaque niveau propose désormais des productions écrites supplémentaires : **Débutant** (phrases à compléter), **Quelques notions** (phrases à compléter et réponses à rédiger), **Avancé** (phrases à compléter, traductions et mini-paragraphes de deux phrases). Les exercices existants sont conservés.

Le module `writing-v05.js` fournit les 33 exercices complémentaires et un correcteur local, sans API externe. Il vérifie des formulations explicitement validées et distingue une réponse exacte, une réponse où les accents sont à revoir, et une formulation non reconnue. **Une réponse non reconnue n’est pas automatiquement jugée fausse ni comptabilisée comme erreur.** L’utilisateur peut consulter des variantes et une explication pédagogique, modifier sa réponse ou poursuivre sans note.

## Types d’exercices

- Lire et comprendre des phrases portugaises ;
- choisir la réponse adaptée dans une situation réelle ;
- remettre les mots d’une phrase dans l’ordre ;
- taper une traduction en portugais et consulter la correction ;
- lire des dialogues, avec traduction française facultative ;
- réviser les expressions et ses erreurs.

## Limites actuelles

Cette V0.5 est une démonstration **entièrement statique** avec `index.html` et `writing-v05.js`, sans compte, base de données ni synchronisation interappareils. Les fonctionnalités vocales sont reportées. Il ne s’agit **pas d’un correcteur grammatical général** : les variantes reconnues sont sélectionnées manuellement, et les autres formulations grammaticalement acceptables ne sont pas toutes détectées. Les corrections décrivent la formulation attendue, mais ne diagnostiquent pas systématiquement les erreurs de grammaire.

## Développement et diffusion

La branche `main` contient l’application de démonstration destinée aux tests. Le site GitHub Pages se met à jour lors des commits si Pages est configuré.

**Ne jamais déployer Cloudflare PROD sans un accord explicite « go prod ».**
