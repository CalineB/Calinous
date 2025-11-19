// src/Store.jsx
import React from "react";
import "./App.css";

const PRODUCTS = [
  // 🌸 Bouquets de bonbons
  {
    id: "bqt-1",
    category: "Bouquets",
    name: "Bouquet Cali’nous Rose",
    description: "Bouquet de bonbons gummies, marshmallows et sucettes, tons rose & pastel.",
    price: "25 €",
    highlight: "Idéal anniversaires & surprises",
    img: "/store/bouquet-rose.png",
  },
  {
    id: "bqt-2",
    category: "Bouquets",
    name: "Bouquet Tropical",
    description: "Mix acidulé mangue, ananas, fruits exotiques version gummy.",
    price: "29 €",
    highlight: "Ambiance Guadeloupe 🌴",
    img: "/store/bouquet-tropic.png",
  },

  // 🎁 Coffrets
  {
    id: "box-1",
    category: "Coffrets",
    name: "Coffret Découverte",
    description: "Sélection de nos best-sellers gummies & bonbons vegan-friendly.",
    price: "32 €",
    highlight: "Parfait pour offrir",
    img: "/store/coffret-decouverte.png",
  },
  {
    id: "box-2",
    category: "Coffrets",
    name: "Coffret Cali’nous Luxe",
    description: "Gummies premium, dragées choco, sucettes et petits oursons dorés.",
    price: "45 €",
    highlight: "Edition limitée ✨",
    img: "/store/coffret-luxe.png",
  },

  // 🎂 Gâteaux de bonbons
  {
    id: "cake-1",
    category: "Gâteaux",
    name: "Gâteau Arc-en-ciel",
    description: "Gâteau 100% bonbons, plusieurs étages colorés (8 à 10 personnes).",
    price: "55 €",
    highlight: "Anniversaires & baby showers",
    img: "/store/gateau-arcenciel.png",
  },
  {
    id: "cake-2",
    category: "Gâteaux",
    name: "Gâteau Oursons Gummy",
    description: "Base moelleuse de bonbons avec plein de petits oursons Cali’nous.",
    price: "49 €",
    highlight: "Option thème personnalisé",
    img: "/store/gateau-oursons.png",
  },

  // 🍹 Bonbons alcoolisés
  {
    id: "alc-1",
    category: "Bonbons alcoolisés",
    name: "Shots Gummy Rhum Passion",
    description: "Petits bonbons gélifiés aromatisés au rhum & fruits de la passion.",
    price: "18 € / boîte",
    highlight: "Réservé aux +18 ans",
    img: "/store/bonbons-rhum.png",
  },
  {
    id: "alc-2",
    category: "Bonbons alcoolisés",
    name: "Cali’nous Spritz Gummies",
    description: "Gummies saveur spritz, parfaits pour l’apéro sucré.",
    price: "18 € / boîte",
    highlight: "À consommer avec modération",
    img: "/store/bonbons-spritz.png",
  },
];

const CATEGORIES = ["Bouquets", "Coffrets", "Gâteaux", "Bonbons alcoolisés"];

export default function Store({ onBack }) {
  const [activeCategory, setActiveCategory] = React.useState("Bouquets");

  const filtered = PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div className="store-page">
      <header className="store-header">
        <button className="store-back-btn" onClick={onBack}>
            ← Retour à l’accueil
        </button>

        <h1 className="store-title">La boutique Cali’nous</h1>
        <p className="store-subtitle">
          Bouquets, coffrets, gâteaux de bonbons et douceurs alcoolisées pour les grands.
        </p>
      </header>

      {/* Onglets catégories */}
      <div className="store-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={
              "store-tab" + (cat === activeCategory ? " store-tab--active" : "")
            }
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille produits */}
      <section className="store-grid">
        {filtered.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-wrapper">
              {/* Remplace les src par tes vraies images plus tard */}
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="product-body">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-desc">{product.description}</p>

              {product.highlight && (
                <p className="product-highlight">{product.highlight}</p>
              )}

              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="cn-btn cn-btn-main product-cta">
                  Demander un devis
                </button>
              </div>
            </div>

            {product.category === "Bonbons alcoolisés" && (
              <p className="product-warning">+18 ans – À consommer avec modération</p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
