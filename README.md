 Multiple Paths Form – React & Tailwind

Ce projet est une application de formulaire à chemins multiples développée avec **React** et **Tailwind CSS**.

Il a été réalisé **dans un but pédagogique**, afin de mieux comprendre et pratiquer les concepts suivants :

- 🔁 **Props Drilling**
- 🔄 **useEffect**

> 🖼️ **⚠️ Ce projet est conçu spécifiquement pour un affichage mobile en largeur 375px.**  
> Il n’a pas été optimisé pour les tablettes ou ordinateurs.

---

## 🎯 Objectif du projet

Créer une interface de formulaire dynamique où les choix de l’utilisateur modifient le chemin ou les étapes suivantes du formulaire.

Ce projet n’a pas été conçu pour une mise en production, mais comme **exercice de compréhension de la logique de flux de données descendante (props drilling)** et de l'**utilisation des effets secondaires avec `useEffect()`**.

## 🛠️ Technologies utilisées

- ⚛️ [React](https://reactjs.org/) – composants et gestion d’état
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – design rapide et mobile-first
- 🧩 React Hooks : `useState`, `useEffect`
- 🔽 Props Drilling : passage de données entre composants imbriqués

## 📱 Spécification d’affichage

- ✅ **Optimisé uniquement pour les écrans mobiles 375px**
- ❌ Pas de mise en page responsive pour les écrans larges (tablettes / desktop)

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/ton-utilisateur/multiple-paths-form.git

# Se rendre dans le dossier
cd multiple-paths-form

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

🧠 Ce que ce projet m’a appris

    Faire circuler l’information entre plusieurs niveaux via les props

    Structurer la logique de formulaire avec conditions dynamiques

    Utiliser useEffect pour surveiller des changements ou initialiser des comportements

    Styliser proprement une UI mobile avec Tailwind

💡 Idées d’amélioration

    Ajouter une validation des champs

    Utiliser React Context API ou Zustand pour éviter le props drilling

    Ajouter des animations de transition entre les étapes

    Rendre le formulaire responsive pour tous les écrans

👩‍💻 Auteur

    Marie Fk

    GitHub : @mariekaf
