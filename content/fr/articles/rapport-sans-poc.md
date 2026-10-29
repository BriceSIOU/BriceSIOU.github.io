---
title: "Un rapport de vulnérabilité sans PoC ne sert à rien"
translationKey: report-without-poc
date: 2026-09-15
draft: true
description: "Pourquoi la friction entre détecter une faille et la corriger est souvent le vrai goulot d'étranglement d'un pipeline DevSecOps."
tags: ["devsecops", "owasp zap", "python"]
summary: "Un scanner qui signale cinquante vulnérabilités ne sécurise rien tant que personne ne peut les reproduire. Retour sur un petit outil qui a changé la dynamique d'une équipe."
---

> **Brouillon** — cet article est un point de départ généré à partir de mon
> travail chez Sanasoft. À relire et à compléter avant publication.

Pendant mon stage, j'ai mis en place des scans **OWASP ZAP** automatisés dans
un pipeline Azure DevOps. Techniquement, c'était un succès : à chaque commit,
le pipeline produisait un rapport listant les vulnérabilités détectées sur
l'application.

Pratiquement, il ne se passait pas grand-chose.

## Le vrai goulot d'étranglement

Le problème n'était pas la détection. Le rapport XML de ZAP était complet,
précis, et parfaitement ignoré. Entre « le scanner a trouvé une faille » et
« un développeur a corrigé la faille », il y a une étape que personne ne
valorise : **reproduire le problème**.

Un développeur qui reçoit un finding doit, avant toute chose, le voir de ses
propres yeux. Et reconstruire manuellement la requête exacte depuis un rapport
XML — bonne URL, bons en-têtes, bon payload — prend assez de temps pour que la
tâche glisse systématiquement en bas de la liste.

## L'outil

J'ai écrit un script Python qui parse les rapports XML de ZAP et génère, pour
chaque finding, une **commande cURL prête à exécuter**.

Il ne détecte rien. Il n'améliore aucune couverture. Il supprime simplement une
étape manuelle fastidieuse entre le rapport et le correctif.

## Ce que j'en retiens

La valeur d'un outil de sécurité ne se mesure pas à ce qu'il détecte, mais à
**ce qui finit corrigé**. Un scanner qui remonte cinquante vulnérabilités que
personne ne reproduit vaut moins qu'un scanner qui en remonte cinq avec un PoC
exécutable.

<!-- À compléter : un exemple concret de sortie du générateur, et peut-être
     le diff de la correction qui en a découlé. -->
