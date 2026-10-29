---
title: "Conception & benchmark d'un AES allégé (AES-LW)"
translationKey: aes-lw
date: 2026-05-26
weight: 20
featured: true
icon: "⚡"
ptype: "Projet académique de groupe"
year: "2026"
tech: ["Python", "AES-128", "PBKDF2", "Benchmark"]
repo: "https://github.com/BriceSIOU/aes-lw"
tags: ["cryptographie", "cryptographie légère", "performance"]
summary: "Une variante allégée d'AES-128 — itérations PBKDF2 et nombre de rounds réduits — mesurée face à Speck, Simon, PRESENT et TEA sur le temps CPU, la mémoire et l'énergie."
---

## L'idée

AES-128 est la référence, mais son coût est réel sur du matériel contraint. La
question posée par ce projet était simple : **jusqu'où peut-on alléger AES
avant que le compromis ne devienne mauvais ?**

## Conception

Nous avons conçu une variante allégée d'AES-128 en réduisant deux choses :

- le nombre d'**itérations PBKDF2** lors de la dérivation de clé ;
- le **nombre de rounds** du chiffrement lui-même.

Le temps d'exécution a ensuite été modélisé par un modèle simple
**coût fixe + coût variable**, ce qui permet de séparer ce qui relève de
l'initialisation de ce qui dépend réellement de la taille des données.

## Benchmark

La variante a été comparée à quatre algorithmes de cryptographie légère
reconnus — **Speck**, **Simon**, **PRESENT** et **TEA** — selon trois axes :

| Métrique | Mesure |
| --- | --- |
| Temps CPU | Mesure directe |
| Empreinte mémoire | Mesure directe |
| Consommation énergétique | Estimation (proxy basé sur le temps CPU) |

L'estimation énergétique est explicitement un **proxy** : sans banc de mesure
matériel, le temps CPU reste l'approximation la plus honnête dont nous
disposions, et le dire fait partie du résultat.

## Ce que j'en retire

Réduire les rounds d'un chiffrement est facile ; **justifier** que la réduction
reste acceptable est le vrai travail. Ce projet m'a surtout appris à construire
un protocole de mesure défendable avant de produire le moindre chiffre.
