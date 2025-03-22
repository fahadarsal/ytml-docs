import React from "react";
import Layout from "@theme/Layout";

// VideoCard Component
function VideoCard({ title, videoUrl }) {
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        background: "#333333",
        color: "#FFFFFF",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <iframe
        width="100%"
        height="180"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "8px" }}
      ></iframe>
      <h3 style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>{title}</h3>
    </div>
  );
}

// VideoGallery Component
function VideoGallery() {
  const videos = [
    {
      title:
        "What Developers Miss About The Single Responsibility Principle (SRP)",
      videoUrl: "https://www.youtube.com/embed/xYgbl9S1-Xo",
    },
    {
      title:
        "Building a Microservices E-commerce System: End-to-End Architecture",
      videoUrl: "https://www.youtube.com/embed/VHMiOc_atcs",
    },
    {
      title: "React Rendering Explained in 5 Quick Steps",
      videoUrl: "https://www.youtube.com/embed/9oaLJeJzniM",
    },
    {
      title:
        "Auto-Generate Your React Client & MSW Mocks with OpenAPI: Connect .NET and Frontend in Minutes!",
      videoUrl: "https://www.youtube.com/embed/B9FU39h-7D0",
    },
    // {
    //   title: "MergeConflict Introduction",
    //   videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    // },
  ];

  return (
    <section
      style={{
        padding: "3rem 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>
        Example Videos
      </h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "Code-Driven Video Creation",
    icon: "💻",
    description:
      "Leverage the power of code to generate high-quality videos using concise and readable syntax.",
  },
  {
    title: "Quick Prototyping",
    icon: "⚡",
    description:
      "Create video templates and render videos in no time, making content production faster than ever.",
  },
  {
    title: "Automated Narration",
    icon: "🎙️",
    description:
      "Generate narration automatically with support for gTTS and Eleven Labs, minimizing manual effort.",
  },
  {
    title: "Dynamic Visuals",
    icon: "🎥",
    description:
      "Utilize animations and transitions to make your videos more engaging and professional.",
  },
];

const WhyUseYTML = () => {
  return (
    <div className="container margin-vert--lg">
      <div className="row">
        {reasons.map((reason, index) => (
          <div key={index} className="col col--4 margin-bottom--lg">
            <div className="card shadow--lw">
              <div className="card__header">
                <h3>
                  {reason.icon} {reason.title}
                </h3>
              </div>
              <div className="card__body">
                <p>{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout
      title="YTML - Unleash Your Creativity with Code-Driven Animations"
      description="Unleash Your Creativity with Code-Driven Animations"
    >
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">YTML</h1>
          <h1 className="hero__title" style={{ color: "red" }}>
            A Programming Language to Create Videos
          </h1>
          <p className="hero__subtitle">
            Unleash Your Creativity with Code-Driven Animations
          </p>
          <div>
            <a className="button button--primary button--lg" href="/docs/intro">
              Get Started
            </a>
            <a
              className="button button--secondary button--lg"
              href="/templates"
              style={{ marginLeft: "5px" }}
            >
              Browse Templates
            </a>
          </div>
        </div>
      </header>
      <main>
        <WhyUseYTML />
        <VideoGallery />
      </main>
    </Layout>
  );
}
