---
title: "Classification d'objets célestes par machine learning"
translationKey: stellar-classification
date: 2026-06-01
weight: 50
icon: "🌌"
ptype: "Projet académique de groupe"
year: "2026"
tech: ["Python", "Scikit-learn", "XGBoost", "SMOTE"]
repo: "https://github.com/BriceSIOU/stellar-classification"
tags: ["machine learning", "data science", "python"]
summary: "Classification de 100 000 objets du relevé SDSS17 — ingénierie d'indices de couleur et rééquilibrage SMOTE, pour 97,86 % de précision avec un Random Forest."
---

## Les données

Le jeu de données **SDSS17** (Sloan Digital Sky Survey) contient
**100 000 objets astronomiques** à répartir entre étoiles, galaxies et quasars,
à partir de leurs mesures photométriques.

## Deux problèmes à régler

**L'ingénierie des variables.** Les magnitudes brutes sont moins informatives
que leurs **différences** : les indices de couleur (`u−g`, `g−r`, `r−i`, `i−z`)
encodent bien plus directement la nature physique d'un objet. Les construire
explicitement a davantage pesé sur le résultat que le choix du modèle.

**Le déséquilibre des classes.** Les quasars sont très minoritaires, et un
modèle entraîné tel quel apprend simplement à les ignorer. Nous avons appliqué
**SMOTE** pour rééquilibrer l'ensemble d'entraînement.

## Résultats

| Modèle | Précision |
| --- | --- |
| **Random Forest** | **97,86 %** |
| XGBoost | en deçà |
| Deep learning | en deçà |

Le résultat le plus instructif est celui-là : sur des données tabulaires bien
préparées, un **Random Forest a dépassé XGBoost et les approches deep
learning**. Un rappel utile que le modèle le plus sophistiqué n'est pas
systématiquement le bon.
