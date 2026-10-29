---
title: "Classifying celestial objects with machine learning"
slug: "stellar-classification"
translationKey: stellar-classification
date: 2026-06-01
weight: 50
icon: "🌌"
ptype: "Academic group project"
year: "2026"
tech: ["Python", "Scikit-learn", "XGBoost", "SMOTE"]
repo: "https://github.com/BriceSIOU/stellar-classification"
tags: ["machine learning", "data science", "python"]
summary: "Classifying 100,000 objects from the SDSS17 survey — colour-index feature engineering and SMOTE rebalancing, reaching 97.86% accuracy with a Random Forest."
---

## The data

The **SDSS17** (Sloan Digital Sky Survey) dataset contains **100,000
astronomical objects** to be sorted into stars, galaxies and quasars from their
photometric measurements.

## Two problems to solve

**Feature engineering.** Raw magnitudes are less informative than their
**differences**: colour indices (`u−g`, `g−r`, `r−i`, `i−z`) encode an object's
physical nature far more directly. Building them explicitly mattered more to
the outcome than the choice of model.

**Class imbalance.** Quasars are heavily under-represented, and a model trained
as-is simply learns to ignore them. We applied **SMOTE** to rebalance the
training set.

## Results

| Model | Accuracy |
| --- | --- |
| **Random Forest** | **97.86%** |
| XGBoost | lower |
| Deep learning | lower |

The most instructive result is that one: on well-prepared tabular data, a
**Random Forest beat both XGBoost and deep learning approaches**. A useful
reminder that the most sophisticated model is not automatically the right one.
