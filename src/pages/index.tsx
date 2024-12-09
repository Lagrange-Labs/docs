import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <h1 className={styles.title}>Introduction to Lagrange</h1>
        <p className={styles.subtitle}>
          Welcome to the Lagrange documentation!
        </p>
        <p className={styles.overview}>
          Welcome to the technical documentation and knowledge resources for Lagrange Labs' protocols.
          Lagrange Labs is building the foundational layer for proving, powered by a decentralized prover network
          on EigenLayer, which supports Lagrange's hyper-parallel ZK Coprocessor, State Committees, as well as the
          proving needs of various other teams.
          The first two protocols offered by Lagrange are the ZK Coprocessor and State Committees. This documentation shares the concepts, architecture, and deployment guides for each of Lagrange’s protocols.
        </p>
        <div className={styles.cards}>
          <Link to="/zk-coprocessor/overview" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ZK Coprocessor</h3>
              <p>
                The ZK Coprocessor lifts intensive computations offchain and
                generates ZK proofs of the results to bring back onchain.
              </p>
            </div>
          </Link>
          <Link to="/state-committees/overview" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>State Committees</h3>
              <p>
                State Committees are fast-finality ZK state proofs that enable
                bridging and interoperability between optimistic rollups.
              </p>
            </div>
          </Link>
          <Link to="/prover-network/overview" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Prover Network</h3>
              <p>
                The foundational proving layer for the internet. 
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
