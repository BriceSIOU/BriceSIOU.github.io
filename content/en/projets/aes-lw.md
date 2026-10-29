---
title: "Designing & benchmarking a lightweight AES (AES-LW)"
slug: "aes-lw"
translationKey: aes-lw
date: 2026-05-26
weight: 20
featured: true
icon: "⚡"
ptype: "Academic group project"
year: "2026"
tech: ["Python", "AES-128", "PBKDF2", "Benchmarking"]
repo: "https://github.com/BriceSIOU/aes-lw"
tags: ["cryptography", "lightweight crypto", "performance"]
summary: "A reduced variant of AES-128 — fewer PBKDF2 iterations and fewer rounds — measured against Speck, Simon, PRESENT and TEA on CPU time, memory and energy."
---

## The idea

AES-128 is the reference, but its cost is real on constrained hardware. The
question behind this project was simple: **how far can you lighten AES before
the trade-off turns bad?**

## Design

We designed a reduced variant of AES-128 by cutting two things:

- the number of **PBKDF2 iterations** during key derivation;
- the **number of rounds** in the cipher itself.

Execution time was then modelled with a simple **fixed cost + variable cost**
model, which separates what belongs to initialisation from what genuinely
scales with the size of the data.

## Benchmark

The variant was compared against four established lightweight cryptography
algorithms — **Speck**, **Simon**, **PRESENT** and **TEA** — along three axes:

| Metric | How it was obtained |
| --- | --- |
| CPU time | Direct measurement |
| Memory footprint | Direct measurement |
| Energy consumption | Estimate (proxy based on CPU time) |

The energy figure is explicitly a **proxy**: without a hardware measurement
bench, CPU time is the most honest approximation available, and saying so is
part of the result.

## What I took from it

Cutting rounds from a cipher is easy; **justifying** that the reduction is
still acceptable is the actual work. More than anything, this project taught me
to build a defensible measurement protocol before producing a single number.
