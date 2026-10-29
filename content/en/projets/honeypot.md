---
title: "SSH & HTTP honeypot"
slug: "honeypot"
translationKey: honeypot
date: 2025-08-06
weight: 40
featured: true
icon: "🍯"
ptype: "Personal project"
year: "2025"
tech: ["Python", "SSH", "HTTP", "Logging"]
repo: "https://github.com/BriceSIOU/Honeypot"
tags: ["threat intelligence", "networking", "python"]
summary: "An SSH and HTTP honeypot that deliberately exposes decoy services to capture the credentials attackers try and the behaviour that follows."
---

## The principle

A honeypot is a deliberately exposed service with no legitimate use, which
means **any traffic reaching it is suspicious by construction**. That is what
makes it such a clean intelligence source — there are no false positives to
triage.

## What it does

Written in **Python**, it exposes two surfaces:

- a fake **SSH** service, recording the credentials tried, the login attempts
  and where they came from;
- a fake **HTTP** service, logging the paths probed and the requests sent.

Every interaction is logged: credentials attempted, timestamp, source address,
sequence of actions.

## What it teaches

Putting a honeypot online is a humbling exercise: automated scanning traffic
arrives within minutes, and the same `root` / `admin` / `123456` pairs come
round again and again. Watching that directly is worth a great deal of reading
on the subject.

It is also a good lesson in isolation: a service designed to attract attackers
must be **contained** — this project is what made me take the separation
between the decoy and its host seriously.
