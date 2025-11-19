// App.jsx
import React, { useState } from "react";
import "./App.css";
import logo from "./assets/calinous-logo.png";
import Store from "./Store.jsx";

export default function App() {
  const [hideWelcomeVideo, setHideWelcomeVideo] = useState(false);
  const [showClickVideo, setShowClickVideo] = useState(false);
  const [clickVideoId, setClickVideoId] = useState(0);
  const [showStore, setShowStore] = useState(false);

  const handlePageClick = () => {
    setClickVideoId((prev) => prev + 1);
    setShowClickVideo(true);
    setHideWelcomeVideo(true);
  };

  const handleClickVideoEnd = () => {
    setShowClickVideo(false);
  };

  return (
    <div className="cn-page" onClick={handlePageClick}>
      {/* Vidéo d'accueil */}
      {!hideWelcomeVideo && (
        <div className="video-bg">
          <video
            src="/animations/welcome_bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}

      {/* Vidéo qui se joue à chaque clic */}
      {showClickVideo && (
        <div className="click-video-overlay">
          <video
            key={clickVideoId}
            src="/animations/On_clic_bg.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleClickVideoEnd}
          />
        </div>
      )}

      {/* SI showStore = false -> page d'accueil, SINON -> page Store */}
      {!showStore ? (
        <main className="cn-hero">
          <div className="cn-logo-wrapper">
            <img
              src={logo}
              alt="Logo Cali'nous"
              className="cn-logo cn-logo-3d cn-logo-squish"
            />
          </div>

          <h1 className="cn-title">Cali’nous</h1>
          <p className="cn-subtitle">
            Boutique de bonbons câlins&nbsp;: gummy, fun, et ultra colorée&nbsp;!
          </p>

          <div className="cn-cta-row">
            <button
              className="cn-btn cn-btn-main"
              onClick={(e) => {
                e.stopPropagation(); // évite de relancer la vidéo clic si tu veux
                setShowStore(true);
              }}
            >
              Découvrir les bonbons
            </button>
            <button className="cn-btn cn-btn-ghost">
              Trouver notre stand
            </button>
          </div>

          <p className="cn-tagline">
            Livraison gourmande &amp; stands festifs en Guadeloupe ✨
          </p>
        </main>
      ) : (
        <Store onBack={() => setShowStore(false)} />
      )}
    </div>
  );
}
