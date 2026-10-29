---
title: "Pipeline DevSecOps pour CAmReportAI"
translationKey: devsecops-pipeline
date: 2026-08-30
weight: 30
featured: true
icon: "🛡"
ptype: "Projet professionnel — Sanasoft"
year: "2026"
tech: ["Azure DevOps", "OWASP ZAP", "Snyk", "Trivy", "Python", ".NET 9", "Docker"]
tags: ["devsecops", "sécurité applicative", "automatisation"]
summary: "Pipeline CI/CD complet sous Azure DevOps intégrant SCA, DAST et tests de logique métier — avec un générateur de PoC cURL pour rendre chaque vulnérabilité reproductible."
---

## Contexte

Réalisé pendant mon stage de deux mois chez **Sanasoft** (Tanger) sur le projet
**CAmReportAI**. L'objectif : faire passer la sécurité applicative d'une étape
ponctuelle à une **propriété continue du pipeline**.

## Le pipeline

Un pipeline **Azure DevOps** décrit en YAML, couvrant à la fois le CI/CD et la
sécurité :

**Analyse de composition logicielle (SCA)** — intégration de **Snyk** pour
détecter les dépendances vulnérables, avec génération automatique de rapports
HTML et de résumés Markdown directement exploitables dans Azure DevOps.

**Tests dynamiques (DAST)** — **OWASP ZAP** en trois modes : *Baseline* pour un
retour rapide à chaque commit, *Full Scan* pour les analyses profondes, et
*API Scan* piloté par la spécification OpenAPI/Swagger.

**Analyse de conteneurs** — **Trivy** sur les images Docker.

## Le point intéressant : rendre les failles reproductibles

Un rapport ZAP signale une vulnérabilité, mais un développeur qui ne sait pas
la reproduire ne la corrigera pas. J'ai donc écrit en **Python** un
**générateur de PoC cURL** qui parse les rapports XML de ZAP et produit, pour
chaque finding, une commande cURL prête à exécuter.

C'est le livrable dont je suis le plus satisfait : il ne détecte rien de
nouveau, il supprime simplement la friction entre « une faille est signalée »
et « une faille est corrigée ».

## Là où l'automatique s'arrête

Les scanners ne voient pas la logique métier. J'ai complété le pipeline par une
suite de tests de sécurité écrits en Python contre l'**API .NET**, ciblant des
failles que seul un humain conçoit :

- **IDOR** — accès à des ressources appartenant à d'autres utilisateurs ;
- **Validation d'entrées** — contournement des contraintes côté serveur ;
- **Abus de crédit** — exploitation de la logique de facturation ;
- **Rate limiting OTP** — résistance du mécanisme de code à usage unique.
