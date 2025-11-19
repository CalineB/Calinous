// Store.jsx
import React from "react";
import "./App.css";

const PRODUCTS = [
  /* ============================
      🌸 BOUQUETS
  ============================ */
  {
    id: "bouquet-1",
    category: "Bouquets",
    name: "Bouquet Cali’nous Rose",
    description: "Bouquet rempli de bonbons roses, guimauves et sucettes.",
    price: "29 €",
    highlight: "Personnalisable couleurs",
    img: "/store/bouquet-rose.png",
  },
  {
    id: "bouquet-2",
    category: "Bouquets",
    name: "Bouquet Arc-en-Ciel",
    description: "Bouquet coloré composé de gummies variés et marshmallows.",
    price: "32 €",
    highlight: "Très apprécié des enfants",
    img: "/store/bouquet-rainbow.png",
  },
  {
    id: "bouquet-3",
    category: "Bouquets",
    name: "Bouquet Gourmand XXL",
    description:
      "Grand bouquet rempli de bonbons moelleux, gummies fruités et sucettes.",
    price: "39 €",
    highlight: "Parfait cadeaux & surprises",
    img: "/store/bouquet-xxl.png",
  },

  /* ============================
      🎁 COFFRETS
  ============================ */
  {
    id: "coffret-1",
    category: "Coffrets",
    name: "Coffret Douceur Mix",
    description: "Coffret rempli d’un assortiment de bonbons doux et acides.",
    price: "28 €",
    highlight: "Meilleur vendeur",
    img: "/store/coffret-mix.png",
  },
  {
    id: "coffret-heart",
    category: "Coffrets",
    name: "Coffret Cœur Amour",
    description:
      "Coffret en forme de cœur rempli de bonbons rouges et roses.",
    price: "36 €",
    highlight: "Édition spéciale amour ❤️",
    img: "/store/coffret-coeur.png",
  },
  {
    id: "coffret-3",
    category: "Coffrets",
    name: "Coffret Premium Or",
    description:
      "Assortiment premium décoré d'éléments dorés pour occasions spéciales.",
    price: "49 €",
    highlight: "Effet Waouh garanti",
    img: "/store/coffret-gold.png",
  },

  /* ============================
      🎂 GÂTEAUX
  ============================ */
  {
    id: "cake-1",
    category: "Gâteaux",
    name: "Gâteau Anniversaire Classique",
    description:
      "Gâteau de bonbons rond garni de guimauves et gummies.",
    price: "45 €",
    highlight: "Personnalisable âge & couleurs",
    img: "/store/gateau-anniversaire.png",
  },
  {
    id: "wedding-1",
    category: "Gâteaux",
    name: "Gâteau de Mariage Cali’nous",
    description:
      "Grand gâteau entièrement composé de bonbons premium, décor blanc & or.",
    price: "120 €",
    highlight: "Personnalisable (noms, date, couleurs)",
    img: "/store/gateau-mariage.png",
  },
  {
    id: "name-1",
    category: "Gâteaux",
    name: "Prénom en bonbons",
    description:
      "Votre prénom (ou celui d’un proche) créé entièrement en bonbons.",
    price: "À partir de 25 €",
    highlight: "Anniversaires, baptêmes, déco 🎉",
    img: "/store/prenoms.png",
  },

  /* ============================
      🍾 BONBONS ALCOOLISÉS
  ============================ */
  {
    id: "alco-1",
    category: "Bonbons alcoolisés",
    name: "Shots Gummies Mojito",
    description: "Bonbons gélifiés infusés au mojito, acidulés et frais.",
    price: "8 € / sachet",
    highlight: "+18 ans",
    img: "/store/mojito-gummy.png",
  },
  {
    id: "alco-2",
    category: "Bonbons alcoolisés",
    name: "Gummies Vodka Fraise",
    description: "Gummies sucrés parfumés à la vodka-fraise.",
    price: "8 € / sachet",
    highlight: "Goût intense",
    img: "/store/vodka-fraise.png",
  },
  {
    id: "alco-3",
    category: "Bonbons alcoolisés",
    name: "Cœurs Champagne Rosé",
    description: "Petits cœurs gélifiés au champagne rosé.",
    price: "9 € / sachet",
    highlight: "Idéal soirées & événements",
    img: "/store/champagne-coeur.png",
  },
  {
    id: "alco-hard-1",
    category: "Bonbons alcoolisés",
    name: "Bonbons durs Rhum Vieux",
    description: "Bonbons durs à base de rhum vieux, arôme intense.",
    price: "6 € / sachet",
    highlight: "+18 ans – longue conservation",
    img: "/store/bonbons-rhum-vieux.png",
  },
  {
    id: "alco-hard-2",
    category: "Bonbons alcoolisés",
    name: "Bonbons durs Mojito",
    description: "Bonbons durs croquants parfum mojito citron vert.",
    price: "6 € / sachet",
    highlight: "+18 ans – frais et acidulé",
    img: "/store/bonbons-durs-mojito.png",
  },
  {
    id: "alco-hard-3",
    category: "Bonbons alcoolisés",
    name: "Bonbons durs Piña Colada",
    description: "Bonbons durs parfum coco & ananas au rhum.",
    price: "6 € / sachet",
    highlight: "+18 ans – exotique",
    img: "/store/bonbons-durs-pina.png",
  },
  {
    id: "alco-gel-1",
    category: "Bonbons alcoolisés",
    name: "Gélifiés Mojito fermes",
    description: "Gélifiés résistants à la chaleur tropicale.",
    price: "8 € / sachet",
    highlight: "+18 ans – spécial Guadeloupe",
    img: "/store/gelifies-mojito.png",
  },
  {
    id: "alco-gel-2",
    category: "Bonbons alcoolisés",
    name: "Gélifiés Planteur",
    description: "Gélifiés rhum + fruits mangue-passion.",
    price: "8 € / sachet",
    highlight: "+18 ans – saveurs antillaises",
    img: "/store/gelifies-planteur.png",
  },
  {
    id: "alco-gel-3",
    category: "Bonbons alcoolisés",
    name: "Gélifiés Piña Colada",
    description: "Gélifiés parfum coco & ananas au rhum.",
    price: "8 € / sachet",
    highlight: "+18 ans – tenue chaleur",
    img: "/store/gelifies-pina.png",
  },
];

const CATEGORIES = ["Bouquets", "Coffrets", "Gâteaux", "Bonbons alcoolisés"];

export default function Store({ onBack }) {
  const [activeCategory, setActiveCategory] = React.useState("Bouquets");

  const filtered = PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div
      className="store-page"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="store-header">
        {onBack && (
          <button className="store-back-btn" onClick={onBack}>
            ← Retour à l’accueil
          </button>
        )}

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
              "store-tab" +
              (cat === activeCategory ? " store-tab--active" : "")
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
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="product-body">
              <h2 className="product-name">{product.name}</h2>

              {/* Aide debug : affiche la catégorie */}
              <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                Catégorie : {product.category}
              </p>

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
              <p className="product-warning">
                +18 ans – À consommer avec modération
              </p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
