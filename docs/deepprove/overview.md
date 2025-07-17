---
id: overview
title: "DeepProve: Verifiable AI at Scale"
description: Lagrange's groundbreaking zkML library for fast and scalable verifiable AI inferences
---

> _"You cannot trust what you cannot verify."_

**DeepProve** is Lagrange's groundbreaking zero-knowledge machine learning (zkML) library that enables verifiable AI inferences with unprecedented speed and scalability. Built to address the critical challenge of AI transparency and safety, DeepProve delivers up to **158x faster proof generation** and **671x faster verification** compared to existing zkML solutions.

## The AI Verifiability Challenge

As artificial intelligence becomes increasingly integrated into critical systems, from healthcare and law enforcement to autonomous vehicles and military applications, we face a fundamental problem: **AI operates as a black box**. While we can observe AI outputs, we cannot verify the logic behind those decisions.

This opacity becomes increasingly dangerous as we approach artificial superintelligence (ASI). Leading AI researchers warn of potential risks including:

- Deceptive behavior: AI systems that develop distinct strategies for passing safety tests versus actual deployment
- Civilization-level threats: Potential for cyberattacks, societal manipulation, and enhanced pathogen development
- Loss of control: Inability to verify whether AI systems serve human interests or their own objectives

## What is zkML?

**Zero-Knowledge Machine Learning (zkML)** combines zero-knowledge proofs (ZKPs) with machine learning to enable cryptographic verification of AI model computations. This revolutionary approach allows anyone to prove that:

1. Correct Model: The AI system is using the expected, verified model
2. Correct Computation: The results are accurately computed according to that model

zkML transforms AI from an opaque black box into a transparent, verifiable system where every inference can be mathematically proven correct.

## DeepProve: Performance

DeepProve represents a giant leap in zkML performance, making verifiable AI practical for real-world applications:

### Unprecedented Speed

- **Upto 158x faster** proof generation than leading competitors
- **Upto 671x faster** verification for neural networks
- Verification completed in **under 0.5 seconds**

### Scalable Architecture

- Optimized for Multilayer Perceptrons (MLPs) and Convolutional Neural Networks (CNNs)
- Performance advantage increases with model size and complexity
- Designed to scale to models with millions of parameters

### Developer-Friendly Workflow

1. Model Training: Train neural networks and export as ONNX files
2. Preprocessing: Generate circuits and prepare prover/verifier keys
3. Proving: Generate cryptographic proofs for model inferences
4. Verification: Enable anyone to validate proof correctness

## Technical Innovation

DeepProve's performance advantages stem from several key innovations:

- Advanced parallelization: Optimized distributed proving across multiple processors
- GPU/ASIC enhancements: Hardware-accelerated cryptographic computations
- Reduced GKR overhead: Streamlined zero-knowledge proof protocols
- Advanced commitment schemes: More efficient cryptographic primitives

## Why DeepProve Matters

As we advance toward superintelligence, verifiability becomes humanity's safeguard. DeepProve enables:

- Trustless AI: Replace blind faith with mathematical certainty
- Aligned development: Ensure AI systems serve human interests
- Transparent decision-making: Understand and verify AI logic
- Safe deployment: Prevent harmful or deceptive AI behavior

## Getting Started

DeepProve is designed for developers, researchers, and organizations who need verifiable AI capabilities. Whether you're building Web3 applications, developing critical infrastructure, or researching AI safety, DeepProve provides the tools to make AI verifiable and trustworthy.

[Explore DeepProve library →](https://github.com/Lagrange-Labs/deep-prove)

> **The future of AI is verifiable. The future of humanity depends on it.**

---

_DeepProve is part of Lagrange's comprehensive suite of zero-knowledge technologies, alongside the ZK Prover Network and ZK Coprocessor, delivering universal proof generation at internet scale._
