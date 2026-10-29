---
title: "Protocole d'authentification léger avec ASCON"
translationKey: ascon-auth
date: 2026-05-20
weight: 10
featured: true
icon: "🔐"
ptype: "Projet académique de groupe"
year: "2026"
tech: ["Python", "ASCON", "Wireshark", "AEAD"]
tags: ["cryptographie", "cryptographie légère", "réseaux"]
summary: "Une bibliothèque « Authentication-as-a-Service » bâtie sur ASCON, le standard NIST pour la cryptographie légère — confidentialité, intégrité et résistance au rejeu via chiffrement authentifié."
---

## Le problème

Les objets connectés doivent s'authentifier, mais la plupart des protocoles
d'authentification classiques supposent un budget CPU et mémoire qu'un capteur
ne possède pas. Depuis 2023, le NIST a retenu **ASCON** comme standard de
cryptographie légère (NIST LWC) précisément pour ce type de cible.

## Ce que j'ai construit

Une bibliothèque **« Authentication-as-a-Service »** reposant entièrement sur
ASCON, qui fournit trois garanties :

- **Confidentialité et intégrité** par chiffrement authentifié (AEAD), de sorte
  qu'un message altéré est rejeté plutôt que déchiffré silencieusement ;
- **Résistance au rejeu**, pour qu'un échange capturé ne puisse pas être
  retransmis par un attaquant ;
- **Hachage** via la fonction ASCON correspondante, ce qui évite d'embarquer
  une seconde primitive cryptographique sur l'appareil.

## Validation

Le protocole n'a pas été seulement implémenté, il a été **vérifié sur le
réseau** : capture et analyse des échanges sous **Wireshark** pour confirmer
que le trafic correspondait bien au protocole spécifié, puis comparaison des
performances face à **SHA-256** et **BLAKE2b**.

C'est le point que je retiens du projet : une implémentation cryptographique
n'est crédible que lorsqu'on l'a observée sur le fil, pas seulement dans ses
tests unitaires.
