import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout
      title="YTML - Animated Videos with Code"
      description="Easily create engaging videos with YTML."
    >
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">YTML</h1>
          <p className="hero__subtitle">
            Create stunning animated videos with simple code.
          </p>
          <div>
            <a className="button button--primary button--lg" href="/docs/intro">
              Get Started
            </a>
            <a
              className="button button--secondary button--lg"
              href="/templates"
              style={{ marginLeft: "10px" }}
            >
              Browse Templates
            </a>
          </div>
        </div>
      </header>
    </Layout>
  );
}
