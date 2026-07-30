# Site web OPTIMA

**Nom de dossier proposé :** `optima-site-web` (fusionner avec le sous-dossier — voir ci-dessous)
**Type :** Site web vitrine
**Dépôt Git :** `https://github.com/mkorboslioptima-netizen/Optima-site-web.git` — ⚠️ **pas votre compte**, **public**
**Statut :** Dernier commit 04/05/2026 par Mohamed Krobosli — **104 fichiers non commités**

---

## À quoi sert ce projet ?

Site web public d'OPTIMA (site vitrine de l'entreprise).

## Structure

Le dossier `F:\Site Web Optima\` ne contient **qu'un seul élément utile** : le sous-dossier
`Optima-site-web/`, qui est le vrai dépôt Git. Le dossier parent n'ajoute rien (juste un
`desktop.ini` et une configuration `.claude/`).

---

## Points d'amélioration proposés

### Bloquants
1. **104 fichiers non commités.** C'est le plus gros volume de travail non sauvegardé du disque.
   Trois mois de modifications qui n'existent que sur ce disque : une panne matérielle et tout
   est perdu. À traiter en priorité absolue, avant toute autre action sur ce projet.
2. **Le dépôt appartient à `mkorboslioptima-netizen`, pas à vous.** Vous avez le droit de `push`
   mais **pas les droits admin** : vous ne pouvez ni changer la visibilité, ni gérer les accès, ni
   récupérer le dépôt si ce compte est perdu. Le nom du compte (`-netizen`) suggère un compte créé
   à la volée.
   → Transférer le dépôt vers votre compte ou, mieux, vers une **organisation GitHub OPTIMA** —
   c'est la bonne réponse durable pour un actif de l'entreprise.

### Important
3. **Niveau d'imbrication inutile.** `F:\Site Web Optima\Optima-site-web\` : deux dossiers pour un
   seul projet, avec deux noms différents du même. → Remonter le contenu d'un niveau et garder
   `F:\optima-site-web\`.
4. **Dernier commit par un autre développeur, travail local par vous.** Aucune convention de
   branches : vous et Mohamed Krobosli travaillez sur le même dépôt sans séparation. Un site
   vitrine reste peu risqué, mais avec 104 fichiers modifiés localement, la prochaine fusion sera
   douloureuse. → Branche de fonctionnalité + Pull Request.

### Confort
5. **Le dépôt est public** — pour un site vitrine c'est acceptable, voire souhaitable. Mais
   vérifier avant tout push qu'aucune clé d'API, aucun identifiant de formulaire de contact et
   aucun accès d'hébergement ne se trouve dans le code.
6. Supprimer le `desktop.ini` résiduel.
7. Ajouter un `README.md` dans le dépôt : comment lancer le site en local, comment le déployer, où
   il est hébergé. Rien ne le documente aujourd'hui.
