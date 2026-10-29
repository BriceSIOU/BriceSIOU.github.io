---
title: "Web crawler in Node.js"
slug: "web-crawler"
translationKey: webcrawler
date: 2025-07-27
weight: 80
icon: "🕷"
ptype: "Personal project"
year: "2025"
tech: ["Node.js", "JavaScript", "HTTP", "DOM parsing"]
repo: "https://github.com/BriceSIOU/webcrawler"
tags: ["javascript", "networking", "python"]
summary: "A scalable Node.js crawler that walks target sites recursively, extracts internal links and reports on them."
---

## What it is

A **web crawler** in Node.js able to walk target sites, extract data structures
from them and produce a report of internal links. It was my final project after
learning **HTTP networking**.

## The two technical points

**Asynchronous request handling.** A naive crawler processes pages one after
another and spends most of its time waiting on the network. Using Node.js's
async model to parallelise requests — without hammering the target — is the
core of the problem.

**Efficient DOM parsing.** Cleanly extracting links from real HTML, which is
frequently malformed, without walking the tree more than necessary.

## What it taught me

The real subject of a crawler is not extraction, it is **control**: where to
stop, what not to revisit, and how fast to query a server that never asked you
to show up.
