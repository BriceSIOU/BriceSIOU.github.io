---
title: "DevSecOps pipeline for CAmReportAI"
slug: "devsecops-pipeline"
translationKey: devsecops-pipeline
date: 2026-08-30
weight: 30
featured: true
icon: "🛡"
ptype: "Professional project — Sanasoft"
year: "2026"
tech: ["Azure DevOps", "OWASP ZAP", "Snyk", "Trivy", "Python", ".NET 9", "Docker"]
tags: ["devsecops", "application security", "automation"]
summary: "A full CI/CD pipeline on Azure DevOps combining SCA, DAST and business-logic testing — with a cURL PoC generator that makes every finding reproducible."
---

## Context

Built during my two-month internship at **Sanasoft** (Tangier) on the
**CAmReportAI** project. The goal: move application security from a one-off
step to a **continuous property of the pipeline**.

## The pipeline

An **Azure DevOps** pipeline described in YAML, covering both CI/CD and
security:

**Software composition analysis (SCA)** — **Snyk** integration to catch
vulnerable dependencies, with automatic generation of HTML reports and Markdown
summaries that are directly usable inside Azure DevOps.

**Dynamic testing (DAST)** — **OWASP ZAP** in three modes: *Baseline* for fast
feedback on every commit, *Full Scan* for deep analysis, and *API Scan* driven
by the OpenAPI/Swagger specification.

**Container scanning** — **Trivy** against the Docker images.

## The interesting part: making findings reproducible

A ZAP report flags a vulnerability, but a developer who cannot reproduce it
will not fix it. So I wrote a **cURL PoC generator** in **Python** that parses
ZAP's XML reports and emits, for each finding, a ready-to-run cURL command.

It is the deliverable I am happiest with: it detects nothing new, it simply
removes the friction between "a flaw is reported" and "a flaw is fixed".

## Where automation stops

Scanners do not see business logic. I complemented the pipeline with a suite of
security tests written in Python against the **.NET API**, targeting flaws only
a human designs:

- **IDOR** — reaching resources belonging to other users;
- **Input validation** — bypassing server-side constraints;
- **Credit abuse** — exploiting the billing logic;
- **OTP rate limiting** — resilience of the one-time-code mechanism.
