// App.jsx
import React, { useState } from "react";
import "./App.css";
import logo from "./assets/calinous-logo.png";
import Store from "./Store.jsx";

export default function App() {
  const [hideWelcomeVideo, setHideWelcomeVideo] = useState(false);
  const [showClickVideo, setShowClickVideo] = useState(false);
  const [clickVideoId, setClickVideoId] = useState(0);

  // "home" | "store" | "stand" | "contact"
  const [currentPage, setCurrentPage] = useState("home");
    const [isNavOpen, setIsNavOpen] = useState(false);


  const handlePageClick = () => {
    setClickVideoId((prev) => prev + 1);
    setShowClickVideo(true);
    setHideWelcomeVideo(true);
  };

  const handleClickVideoEnd = () => {
    setShowClickVideo(false);
  };

  const goHome = () => {
    setCurrentPage("home");
  };

  const goToStore = () => {
    setCurrentPage("store");
  };

  const goToStand = () => {
    setCurrentPage("stand");
  };

  const goToContact = () => {
    setCurrentPage("contact");
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

      {/* MENU PERMANENT */}
<header
  className="cn-nav"
  onClick={(e) => e.stopPropagation()}
>
  {/* GAUCHE : nounours / logo + nom */}
  <div
    className="cn-nav-brand"
    onClick={(e) => {
      e.stopPropagation();
      setCurrentPage("home");
      setIsNavOpen(false);
    }}
    style={{ cursor: "pointer" }}
  >
    <img
      src={logo}
      alt="Cali'nous logo mini"
      className="cn-nav-logo-mini"
    />
    <span className="cn-nav-gold">Cali’nous</span>
  </div>

  {/* DROITE : bouton mobile + nav */}
  <div className="cn-nav-right">
    {/* bouton mobile 🍬 */}
    <button
      className="cn-nav-toggle"
      onClick={(e) => {
        e.stopPropagation();
        setIsNavOpen((prev) => !prev);
      }}
    >
      🍬
    </button>

    <nav
      className={
        "cn-nav-links" + (isNavOpen ? " is-open" : "")
      }
    >
      <button
        className={
          "cn-nav-link" + (currentPage === "home" ? " is-active" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPage("home");
          setIsNavOpen(false);
        }}
      >
        Accueil
      </button>

      <button
        className={
          "cn-nav-link" + (currentPage === "store" ? " is-active" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPage("store");
          setIsNavOpen(false);
        }}
      >
        Boutique
      </button>

      <button
        className={
          "cn-nav-link" + (currentPage === "stand" ? " is-active" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPage("stand");
          setIsNavOpen(false);
        }}
      >
        Nous trouver
      </button>

      <button
        className={
          "cn-nav-link" + (currentPage === "contact" ? " is-active" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPage("contact");
          setIsNavOpen(false);
        }}
      >
        Contact
      </button>
    </nav>
  </div>
</header>





      {/* CONTENU : selon la page */}
      <main
        className="cn-main"
        onClick={(e) => e.stopPropagation()} // clic sur le contenu = pas de vidéo clic
      >
        {currentPage === "home" && (
          <section className="cn-hero">
            <div className="cn-logo-wrapper">
              <img
                src={logo}
                alt="Logo Cali'nous"
                className="cn-logo cn-logo-3d cn-logo-squish"
              />
            </div>

            <p className="cn-slogan">Le réconfort des grands et des petits</p>

            <h1 className="cn-title">Cali’nous</h1>
            <p className="cn-subtitle">
              Boutique de bonbons câlins&nbsp;: gummy, fun, et ultra colorée&nbsp;!
            </p>

            <div className="cn-cta-row">
              <button
                className="cn-btn cn-btn-main"
                onClick={(e) => {
                  e.stopPropagation();
                  goToStore();
                }}
              >
                Découvrir les bonbons
              </button>
              <button
                className="cn-btn cn-btn-ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  goToStand();
                }}
              >
                Trouver notre stand
              </button>
            </div>

            <p className="cn-tagline">
              Livraison gourmande &amp; stands festifs en Guadeloupe ✨
            </p>
          </section>
        )}

        {currentPage === "store" && (
          <Store onBack={goHome} />
        )}

        {currentPage === "stand" && (
          <section className="cn-section cn-section-gummy">
            <h2 className="cn-section-title">
              Où nous trouver ?
            </h2>
            <p className="cn-section-subtitle">
              Viens croiser notre stand tout doux et ultra coloré&nbsp;!
            </p>

            <div className="cn-gummy-grid">
              <div className="cn-card-gummy">
                <h3>Stands réguliers</h3>
                <ul>
                  <li>🎪 Marchés &amp; événements locaux en Guadeloupe</li>
                  <li>🍭 Stands éphémères pour fêtes &amp; anniversaires</li>
                  <li>✨ Ambiance lumineuse, néons et pluie de gummies</li>
                </ul>
              </div>

              <div className="cn-card-gummy">
                <h3>Zones desservies</h3>
                <ul>
                  <li>📍 Pointe-à-Pitre</li>
                  <li>📍 Les Abymes</li>
                  <li>📍 Baie-Mahault &amp; alentours</li>
                </ul>
                <p className="cn-gummy-note">
                  Tu veux nous voir près de chez toi&nbsp;?  
                  <br />
                  Propose ton événement via la page Contact 💌
                </p>
              </div>

              <div className="cn-card-gummy">
                <h3>Prochains rendez-vous</h3>
                <p>Bientôt&nbsp;:</p>
                <ul>
                  <li>🎉 Marché nocturne – date à venir</li>
                  <li>🎈 Stand spécial kids – en préparation</li>
                </ul>
                <p className="cn-gummy-note">
                  Suis-nous sur les réseaux pour ne rien rater&nbsp;!
                </p>
              </div>
            </div>
          </section>
        )}

        {currentPage === "contact" && (
          <section className="cn-section cn-section-gummy">
            <h2 className="cn-section-title">
              Contact &amp; câlins sucrés
            </h2>
            <p className="cn-section-subtitle">
              Une question, un événement, une envie de pluie de gummies&nbsp;?
            </p>

            <div className="cn-contact-layout">
              <form
                className="cn-contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Merci pour ton message tout doux ! 💌");
                }}
              >
                <label>
                  Prénom / Nom
                  <input
                    type="text"
                    name="name"
                    placeholder="Ton petit nom tout doux"
                    required
                  />
                </label>

                <label>
                  E-mail
                  <input
                    type="email"
                    name="email"
                    placeholder="pour te répondre avec des gummies"
                    required
                  />
                </label>

                <label>
                  Sujet
                  <select name="subject" defaultValue="stand">
                    <option value="stand">Organiser un stand</option>
                    <option value="commande">Commande / bonbons</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Raconte-nous ton idée, on ajoute les paillettes ✨"
                    required
                  />
                </label>

                <button type="submit" className="cn-btn cn-btn-main cn-btn-wide">
                  Envoyer mon message sucré
                </button>
              </form>

              <div className="cn-contact-side">
                <div className="cn-card-gummy">
                  <h3>Infos sucrées</h3>
                  <p>
                    📍 Guadeloupe  
                    <br />
                    🍬 Stands &amp; livraisons locales
                  </p>
                  <p>
                    💌 Instagram / WhatsApp à venir  
                    <span className="cn-gummy-note">
                      (On prépare un univers tout doux rien que pour toi)
                    </span>
                  </p>
                </div>

                <div className="cn-card-gummy cn-card-bubble">
                  <p>
                    Envie d’un stand Cali’nous pour  
                    un anniversaire, une kermesse ou un marché&nbsp;?
                  </p>
                  <p>Écris-nous et on imagine un coin câlin et gourmand ensemble 🍡</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
