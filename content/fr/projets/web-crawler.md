---
title: "Web Crawler en Node.js"
translationKey: webcrawler
date: 2025-07-27
weight: 80
icon: "🕷"
ptype: "Projet personnel"
year: "2025"
tech: ["Node.js", "JavaScript", "HTTP", "Parsing DOM"]
repo: "https://github.com/BriceSIOU/webcrawler"
tags: ["javascript", "réseaux", "python"]
summary: "Un crawler évolutif en Node.js qui parcourt des sites cibles de façon récursive, extrait les liens internes et en produit un rapport."
---

## Ce que c'est

Un **web crawler** en Node.js capable de parcourir des sites cibles, d'en
extraire les structures de données et d'en produire un rapport de liens
internes. C'était mon projet de fin d'apprentissage du **networking HTTP**.

## Les deux points techniques

**Gestion asynchrone des requêtes.** Un crawler naïf traite les pages les unes
après les autres et passe l'essentiel de son temps à attendre le réseau. Tirer
parti du modèle asynchrone de Node.js pour paralléliser les requêtes — sans
saturer la cible — est le cœur du problème.

**Parsing DOM efficace.** Extraire proprement les liens d'un HTML réel, souvent
mal formé, sans reparcourir l'arbre plus que nécessaire.

## Ce que ça m'a appris

Le véritable sujet d'un crawler n'est pas l'extraction, c'est le **contrôle** :
où s'arrêter, quoi ne pas revisiter, et à quelle cadence interroger un serveur
qui ne vous a rien demandé.
