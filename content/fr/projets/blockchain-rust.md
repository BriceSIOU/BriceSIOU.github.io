---
title: "Implémentation d'une blockchain en Rust"
translationKey: rust-blockchain
date: 2026-08-08
weight: 70
icon: "⛓"
ptype: "Projet personnel"
year: "2026"
tech: ["Rust", "Hachage cryptographique", "Preuve de travail"]
repo: "https://github.com/BriceSIOU/rust-blockchain"
tags: ["rust", "cryptographie", "systèmes"]
summary: "Une blockchain implémentée depuis zéro en Rust avec ses mécanismes essentiels — chaînage par hachage, validation des blocs et consensus."
---

## Pourquoi

Il est facile de parler de blockchain sans en avoir jamais écrit une. Ce projet
avait un objectif pédagogique assumé : **implémenter les mécanismes essentiels
depuis zéro**, pour comprendre ce que le chaînage par hachage garantit
réellement — et ce qu'il ne garantit pas.

## Pourquoi Rust

Rust impose de raisonner explicitement sur la **propriété des données** et la
gestion mémoire, sans ramasse-miettes. Pour une structure de données dont
l'intégrité est le seul intérêt, c'est un langage qui force à la rigueur :
les erreurs que l'on ferait en silence ailleurs deviennent des erreurs de
compilation.

## Ce que ça clarifie

Écrire la validation d'un bloc soi-même rend immédiatement tangible le fait
qu'une blockchain ne protège pas *les données* — elle protège seulement
**l'ordre et l'intégrité de l'historique**. Une donnée fausse insérée dans un
bloc valide reste fausse, et parfaitement chaînée.
