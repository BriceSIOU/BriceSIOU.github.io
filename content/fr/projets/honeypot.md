---
title: "Honeypot SSH & HTTP"
translationKey: honeypot
date: 2025-08-06
weight: 40
featured: true
icon: "🍯"
ptype: "Projet personnel"
year: "2025"
tech: ["Python", "SSH", "HTTP", "Logging"]
repo: "https://github.com/BriceSIOU/Honeypot"
tags: ["threat intelligence", "réseaux", "python"]
summary: "Un honeypot SSH et HTTP qui expose délibérément des services factices pour capturer les identifiants testés et le comportement des attaquants."
---

## Le principe

Un honeypot est un service volontairement exposé qui n'a aucune utilité
légitime : **tout trafic qui l'atteint est, par construction, suspect**. C'est
ce qui en fait une source de renseignement d'une rare propreté — pas de faux
positifs à trier.

## Ce qu'il fait

Écrit en **Python**, il expose deux surfaces :

- un faux service **SSH**, qui enregistre les identifiants testés, les
  tentatives de connexion et leur provenance ;
- un faux service **HTTP**, qui journalise les chemins sondés et les requêtes
  envoyées.

Chaque interaction est journalisée : identifiants essayés, horodatage, adresse
source, séquence d'actions.

## Ce que ça apprend

Mettre un honeypot en ligne est une leçon d'humilité : le trafic de scan
automatisé arrive en quelques minutes, et les mêmes couples
`root` / `admin` / `123456` reviennent en boucle. Observer directement cette
réalité vaut beaucoup de lectures sur le sujet.

C'est aussi un bon exercice d'isolation : un service conçu pour attirer des
attaquants doit être **confiné** — ce projet m'a fait prendre au sérieux la
séparation entre le leurre et l'hôte qui le fait tourner.
