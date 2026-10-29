---
title: "À propos"
translationKey: about
description: "Parcours, expérience et compétences d'Eninam Brice SIOU, étudiant ingénieur en cybersécurité et cyberintelligence à l'ENSA Tanger."
lead: "Étudiant ingénieur en cybersécurité & cyberintelligence, avec un socle solide en mathématiques et en résolution de problèmes. Je cherche à transformer la théorie cryptographique en implémentations qui tiennent la route sur du matériel contraint."

experience:
  - role: "Stagiaire ingénieur DevSecOps"
    org: "Sanasoft"
    location: "Tanger, Maroc"
    period: "Été 2026 · 2 mois"
    project: "Projet CAmReportAI"
    points:
      - "Conception et implémentation d'un pipeline DevSecOps complet sous Azure DevOps (YAML), couvrant CI/CD et sécurité applicative."
      - "Intégration de l'analyse de composition logicielle (SCA) via Snyk, avec génération automatique de rapports HTML et de résumés Markdown depuis Azure DevOps."
      - "Mise en place de scans DAST automatisés avec OWASP ZAP : Baseline, Full Scan et API Scan (OpenAPI/Swagger)."
      - "Développement d'un générateur de PoC cURL en Python parsant les rapports XML de ZAP, pour permettre aux développeurs de reproduire les vulnérabilités détectées."
      - "Développement de tests de sécurité métier en Python (IDOR, validation d'entrées, abus de crédit, rate limiting OTP) ciblant une API .NET, afin d'identifier les failles non détectables par les outils automatiques."
    stack: ["Azure DevOps", "OWASP ZAP", "Snyk", "Trivy", "Python", ".NET 9", "Docker", "sqlmap", "Azure App Service"]

education:
  - degree: "Diplôme d'ingénieur en Cybersécurité & Cyberintelligence"
    school: "École Nationale des Sciences Appliquées de Tanger (ENSAT)"
    location: "Tanger, Maroc"
    period: "2024 – aujourd'hui"
  - degree: "Classes préparatoires intégrées"
    school: "École Nationale des Sciences Appliquées de Tanger (ENSAT)"
    location: "Tanger, Maroc"
    period: "2022 – 2024"
  - degree: "Baccalauréat, série Mathématiques & Sciences de la Vie"
    school: "Collège Adèle High School"
    location: "Togo"
    period: "Obtenu en 06/2022"

skills:
  - group: "Cybersécurité & réseaux"
    items: ["Pentesting (Active Directory, WordPress)", "Cryptographie appliquée", "Sécurité IoT", "Rétro-ingénierie", "Threat Intelligence", "VPN (strongSwan)", "Administration système (GPO, configuration réseau)", "DevSecOps (Azure DevOps, OWASP ZAP, Snyk, DAST/SCA)"]
  - group: "Programmation"
    items: ["C", "Rust", "Python", "JavaScript", "Java", "PHP (Laravel)", "HTML"]
  - group: "Outils"
    items: ["Docker", "Kubernetes", "Git", "Burp Suite", "Wireshark", "Metasploit", "Kali", "Trivy", "Bandit", "sqlmap", "Cisco Packet Tracer", "KVM"]
  - group: "Data science & ML"
    items: ["SQL", "NoSQL", "Python", "Régression linéaire", "Régression logistique", "Classification", "MLP"]

toolbox: ["Pop!_OS", "Neovim", "Docker", "Kubernetes", "Git", "Bash"]

certifications:
  - name: "CCNA — Introduction to Networks"
  - name: "CCNA — Switching, Routing and Wireless Essentials"
  - name: "CCNA — Enterprise Networking"

spoken:
  - name: "Français"
    level: "Langue maternelle"
  - name: "Anglais"
    level: "Professionnel courant (C1)"
  - name: "Espagnol"
    level: "Élémentaire"

leadership:
  - role: "Secrétaire Général (SG)"
    org: "CESTOM Tanger"
    period: "2023 – 2024"
    note: "En charge de l'organisation d'événements étudiants."

soft: ["Collaboration", "Adaptabilité", "Résolution analytique de problèmes", "Communication efficace"]
---

## Ce qui m'intéresse

Mon fil conducteur, c'est l'écart entre **la cryptographie sur le papier et la
cryptographie qui tourne**. Un algorithme peut être prouvé sûr et rester
inutilisable sur un microcontrôleur à 16 MHz — c'est précisément cet espace que
j'aime explorer : réduire le coût d'un chiffrement sans casser ses garanties,
puis le mesurer honnêtement.

Concrètement, cela m'a mené vers la **cryptographie légère** (une variante
allégée d'AES-128 et son benchmark face à Speck, Simon, PRESENT et TEA), vers
les **standards NIST LWC** (un protocole d'authentification bâti sur ASCON), et
vers la **sécurité des objets connectés**, où ces contraintes sont la norme
plutôt que l'exception.

En parallèle, mon stage chez Sanasoft m'a appris l'autre moitié du métier :
la sécurité n'a de valeur que si elle est **automatisée et reproductible**. Un
scan DAST qui tourne à chaque commit vaut mieux qu'un audit annuel, et un
rapport de vulnérabilité ne sert à rien si le développeur ne peut pas la
reproduire — d'où le générateur de PoC cURL que j'ai écrit là-bas.

## Comment je travaille

Je passe mes journées sous **Pop!_OS**, dans **Neovim** et un terminal, avec
Docker et Kubernetes pour tout ce qui doit être isolé ou reproductible.
J'aime les outils que l'on peut scripter, les systèmes que l'on peut
démonter, et les résultats que l'on peut mesurer.
