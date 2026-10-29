---
title: "Blockchain implementation in Rust"
slug: "rust-blockchain"
translationKey: rust-blockchain
date: 2026-08-08
weight: 70
icon: "⛓"
ptype: "Personal project"
year: "2026"
tech: ["Rust", "Cryptographic hashing", "Proof of work"]
repo: "https://github.com/BriceSIOU/rust-blockchain"
tags: ["rust", "cryptography", "systems"]
summary: "A blockchain implemented from scratch in Rust with its essential mechanisms — hash chaining, block validation and consensus."
---

## Why

It is easy to talk about blockchain without ever having written one. This
project had a deliberately educational goal: **implement the essential
mechanisms from scratch**, to understand what hash chaining actually guarantees
— and what it does not.

## Why Rust

Rust forces you to reason explicitly about **data ownership** and memory
management, with no garbage collector. For a data structure whose only point is
its integrity, that is a language that imposes rigour: mistakes you would make
silently elsewhere become compile errors.

## What it clarifies

Writing block validation yourself makes one thing immediately concrete: a
blockchain does not protect *the data* — it only protects **the order and
integrity of the history**. False data inserted into a valid block is still
false, and perfectly chained.
