import React from 'react';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11L11 1M11 1H2M11 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function App() {
  return (
    <>
      <div className="ambient-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="layout">
        <header>
          <h1 className="name">Oskar Minor</h1>
          <p className="bio">
            I'm a <span className="bio-highlight">16-year-old developer</span> based in Poland. 
            Creator of immersive digital experiences and next-gen software.
          </p>
        </header>

        <main className="grid">
          {/* Featured Project: OmniOS */}
          <a href="https://omniaios.com" target="_blank" rel="noopener noreferrer" className="card featured">
            <div className="card-top">
              <img src="./icons/omnios.webp" alt="OmniOS" className="project-icon" />
              <div className="status-badge">
                <div className="status-dot"></div>
                Coming Early 2026
              </div>
            </div>
            <div className="card-main">
              <h2 className="project-title">OmniOS</h2>
              <p className="project-desc">
                A fully local, privacy-focused operating system where AI isn't just a feature—it's the core. 
                Redefining personal computing with semantic intelligence and proactive design.
              </p>
            </div>
            <div className="card-link">
              omniaios.com <ArrowIcon />
            </div>
          </a>

          {/* Project: I Am Dog */}
          <a href="https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog" target="_blank" rel="noopener noreferrer" className="card standard">
            <div className="card-top">
              <img src="./icons/iamdog.webp" alt="I Am Dog" className="project-icon" />
            </div>
            <div className="card-main">
              <h2 className="project-title">I Am Dog</h2>
              <p className="project-desc">
                Experience life as a dog in this immersive mobile simulation game. Explore, play, and survive.
              </p>
            </div>
            <div className="card-link">
              Play Store <ArrowIcon />
            </div>
          </a>

          {/* Project: Hungry Piggy */}
          <a href="https://play.google.com/store/apps/details?id=com.ronimstudio.hitacoin" target="_blank" rel="noopener noreferrer" className="card standard">
            <div className="card-top">
              <img src="./icons/hungrypiggy.webp" alt="Hungry Piggy" className="project-icon" />
            </div>
            <div className="card-main">
              <h2 className="project-title">Hungry Piggy</h2>
              <p className="project-desc">
                A fast-paced arcade game. Feed the piggy, avoid obstacles, and set new high scores.
              </p>
            </div>
            <div className="card-link">
              Play Store <ArrowIcon />
            </div>
          </a>

          {/* Project: strescto */}
          <a href="https://strescto.pl" target="_blank" rel="noopener noreferrer" className="card standard">
            <div className="card-top">
              <img src="./icons/strescto.webp" alt="streść.to" className="project-icon" />
            </div>
            <div className="card-main">
              <h2 className="project-title">streść.to</h2>
              <p className="project-desc">
                Intelligent summarization tool for Polish students. Save time with AI-powered text analysis.
              </p>
            </div>
            <div className="card-link">
              strescto.pl <ArrowIcon />
            </div>
          </a>
        </main>

        <footer>
          <div>
            <a href="mailto:minoroskar2009@gmail.com" className="contact-email">minoroskar2009@gmail.com</a>
            <div className="copyright">
               © 2026 Oskar Minor
            </div>
          </div>
          
          <div className="socials">
            <a href="https://x.com/oskarminor" target="_blank" rel="noopener noreferrer" className="social-link">X</a>
            <a href="https://www.linkedin.com/in/oskar-minor-704245343/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/oskie5802" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </footer>
      </div>
    </>
  );
}