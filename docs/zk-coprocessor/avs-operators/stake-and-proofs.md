---
id: stake-and-proofs
title: "Stake and Proofs"
description: A detailed description on the relation between the stake of an operator and the proof generation tasks it must fulfill
---

This page describes the relation between the stake of an operator and the proof generation tasks it must fulfill.

In Lagrange Network, the stake of an operator is used to guarantee liveness: that when an operator receives a task, it delivers a valid proof within the allotted time. Given the user query relies on these proofs, it is paramount that the Lagrange Network is able to generate proofs as fast as possible.

A worker that accepts a task is "binding" some of its stake to the guarantee of answering back the proof in the allotted time. We can say some of its stake becomes now "active". An operator can take multiple tasks at once, as long as the amount of "active stake" does not grow more than its total stake delegated on the Lagrange Network.

It is up to the operator to manage its fleet of workers and decide what type of workers one wants to run. We will provide more guided documentation on that matter in the following weeks. However, given the early phases of the project, we recommend to be running a simple worker to start with and scale up with time.
