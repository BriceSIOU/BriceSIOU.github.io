---
title: "A vulnerability report without a PoC is worthless"
translationKey: report-without-poc
date: 2026-09-15
draft: true
description: "Why the friction between detecting a flaw and fixing it is often the real bottleneck in a DevSecOps pipeline."
tags: ["devsecops", "owasp zap", "python"]
summary: "A scanner reporting fifty vulnerabilities secures nothing while nobody can reproduce them. Notes on a small tool that changed how a team worked."
---

> **Draft** — this post is a starting point generated from my work at Sanasoft.
> Review and expand it before publishing.

During my internship I set up automated **OWASP ZAP** scans inside an Azure
DevOps pipeline. Technically it worked: on every commit, the pipeline produced
a report listing the vulnerabilities found in the application.

In practice, not much happened.

## The real bottleneck

The problem was not detection. ZAP's XML report was complete, precise, and
comprehensively ignored. Between "the scanner found a flaw" and "a developer
fixed the flaw" sits a step nobody gives credit for: **reproducing the
problem**.

A developer handed a finding needs, before anything else, to see it with their
own eyes. And manually rebuilding the exact request from an XML report — right
URL, right headers, right payload — takes long enough that the task reliably
slides to the bottom of the list.

## The tool

I wrote a Python script that parses ZAP's XML reports and generates, for each
finding, a **ready-to-run cURL command**.

It detects nothing. It improves no coverage metric. It simply removes a tedious
manual step between the report and the fix.

## What I take from it

The value of a security tool is not measured by what it detects, but by **what
ends up fixed**. A scanner surfacing fifty vulnerabilities nobody reproduces is
worth less than one surfacing five with an executable PoC.

<!-- To add: a concrete example of the generator's output, and maybe the diff
     of the fix that came out of it. -->
