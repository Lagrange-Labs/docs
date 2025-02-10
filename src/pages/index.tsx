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
          Welcome to the technical documentation and knowledge resources for
          Lagrange, the infinite proving layer. Lagrange consists of two
          protocols - a decentralized ZK Prover Network and a hyper-parallel ZK
          Coprocessor. This documentation shares the concepts, architecture, and
          other relevant information for each of Lagrange’s protocols.
        </p>
        <div className={styles.cards}>
          <Link to="/prover-network/overview" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ZK Prover Network</h3>
              <p>
                Lagrange’s ZK Prover Network supports universal proving - for
                rollups, apps, coprocessors and interoperability.
              </p>
            </div>
          </Link>
          <Link to="/zk-coprocessor/overview" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ZK Coprocessor</h3>
              <p>
                The ZK Coprocessor enables developers to prove custom SQL
                queries over onchain data, directly from smart contracts.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
