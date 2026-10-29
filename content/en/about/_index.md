---
title: "About"
translationKey: about
description: "Background, experience and skills of Eninam Brice SIOU, cybersecurity and cyberintelligence engineering student at ENSA Tangier."
lead: "Cybersecurity & cyberintelligence engineering student with a solid grounding in mathematics and problem solving. I am interested in turning cryptographic theory into implementations that actually hold up on constrained hardware."

experience:
  - role: "DevSecOps engineering intern"
    org: "Sanasoft"
    location: "Tangier, Morocco"
    period: "Summer 2026 · 2 months"
    project: "CAmReportAI project"
    points:
      - "Designed and implemented a complete DevSecOps pipeline on Azure DevOps (YAML), covering CI/CD and application security."
      - "Integrated software composition analysis (SCA) through Snyk, with automatic generation of HTML reports and Markdown summaries from Azure DevOps."
      - "Set up automated DAST scans with OWASP ZAP: Baseline, Full Scan and API Scan (OpenAPI/Swagger)."
      - "Built a cURL PoC generator in Python that parses ZAP's XML reports, so developers can reproduce each detected vulnerability."
      - "Wrote business-logic security tests in Python (IDOR, input validation, credit abuse, OTP rate limiting) against a .NET API, to catch flaws automated tooling misses."
    stack: ["Azure DevOps", "OWASP ZAP", "Snyk", "Trivy", "Python", ".NET 9", "Docker", "sqlmap", "Azure App Service"]

education:
  - degree: "Engineering degree in Cybersecurity & Cyberintelligence"
    school: "École Nationale des Sciences Appliquées de Tanger (ENSAT)"
    location: "Tangier, Morocco"
    period: "2024 – present"
  - degree: "Integrated preparatory classes"
    school: "École Nationale des Sciences Appliquées de Tanger (ENSAT)"
    location: "Tangier, Morocco"
    period: "2022 – 2024"
  - degree: "Baccalaureate, Mathematics & Life Sciences"
    school: "Collège Adèle High School"
    location: "Togo"
    period: "Obtained 06/2022"

skills:
  - group: "Cybersecurity & networks"
    items: ["Pentesting (Active Directory, WordPress)", "Applied cryptography", "IoT security", "Reverse engineering", "Threat intelligence", "VPN (strongSwan)", "System administration (GPO, network configuration)", "DevSecOps (Azure DevOps, OWASP ZAP, Snyk, DAST/SCA)"]
  - group: "Programming"
    items: ["C", "Rust", "Python", "JavaScript", "Java", "PHP (Laravel)", "HTML"]
  - group: "Tools"
    items: ["Docker", "Kubernetes", "Git", "Burp Suite", "Wireshark", "Metasploit", "Kali", "Trivy", "Bandit", "sqlmap", "Cisco Packet Tracer", "KVM"]
  - group: "Data science & ML"
    items: ["SQL", "NoSQL", "Python", "Linear regression", "Logistic regression", "Classification", "MLP"]

toolbox: ["Pop!_OS", "Neovim", "Docker", "Kubernetes", "Git", "Bash"]

certifications:
  - name: "CCNA — Introduction to Networks"
  - name: "CCNA — Switching, Routing and Wireless Essentials"
  - name: "CCNA — Enterprise Networking"

spoken:
  - name: "French"
    level: "Native"
  - name: "English"
    level: "Full professional proficiency (C1)"
  - name: "Spanish"
    level: "Elementary"

leadership:
  - role: "Secretary General"
    org: "CESTOM Tangier"
    period: "2023 – 2024"
    note: "Responsible for organising student events."

soft: ["Collaboration", "Adaptability", "Analytical problem solving", "Clear communication"]
---

## What I'm interested in

The thread running through my work is the gap between **cryptography on paper
and cryptography that runs**. An algorithm can be provably secure and still be
unusable on a 16 MHz microcontroller — that gap is exactly what I like working
in: cutting the cost of a cipher without breaking its guarantees, then
measuring the result honestly.

In practice that has taken me towards **lightweight cryptography** (a reduced
variant of AES-128, benchmarked against Speck, Simon, PRESENT and TEA), towards
the **NIST LWC standards** (an authentication protocol built on ASCON), and
towards **IoT security**, where those constraints are the norm rather than the
exception.

Alongside that, my internship at Sanasoft taught me the other half of the job:
security is only worth anything when it is **automated and reproducible**. A
DAST scan that runs on every commit beats an annual audit, and a vulnerability
report is useless if the developer cannot reproduce it — which is why I wrote
the cURL PoC generator there.

## How I work

I spend my days on **Pop!_OS**, in **Neovim** and a terminal, with Docker and
Kubernetes for anything that needs to be isolated or reproducible. I like tools
I can script, systems I can take apart, and results I can measure.
