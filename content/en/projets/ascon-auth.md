---
title: "Lightweight authentication protocol with ASCON"
slug: "ascon-auth"
translationKey: ascon-auth
date: 2026-05-20
weight: 10
featured: true
icon: "🔐"
ptype: "Academic group project"
year: "2026"
tech: ["Python", "ASCON", "Wireshark", "AEAD"]
tags: ["cryptography", "lightweight crypto", "networking"]
summary: "An \"Authentication-as-a-Service\" library built on ASCON, the NIST lightweight cryptography standard — confidentiality, integrity and replay resistance through authenticated encryption."
---

## The problem

Connected devices need to authenticate, but most conventional authentication
protocols assume a CPU and memory budget a sensor simply does not have. Since
2023, NIST has selected **ASCON** as its lightweight cryptography standard
(NIST LWC) for exactly this class of target.

## What I built

An **"Authentication-as-a-Service"** library built entirely on ASCON, providing
three guarantees:

- **Confidentiality and integrity** through authenticated encryption (AEAD), so
  that a tampered message is rejected rather than silently decrypted;
- **Replay resistance**, so a captured exchange cannot be replayed by an
  attacker;
- **Hashing** via the matching ASCON function, which avoids shipping a second
  cryptographic primitive onto the device.

## Validation

The protocol was not just implemented, it was **verified on the wire**:
capturing and analysing the exchanges in **Wireshark** to confirm the traffic
matched the specified protocol, then benchmarking its performance against
**SHA-256** and **BLAKE2b**.

That is the lesson I took from this project — a cryptographic implementation is
only credible once you have watched it on the network, not just in its unit
tests.
