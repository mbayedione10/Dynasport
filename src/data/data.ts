// Utilisation des chemins publics pour les images
const jaraaf = "/images/partenaires/jaraaf.webp";
const douanes = "/images/partenaires/douanes.webp";
const gf = "/images/partenaires/gf.webp";
const wfc = "/images/partenaires/wfc.webp";
const besport = "/images/partenaires/besport.webp";

// Références statiques
export const references = [
  {
    id: 1,
    team_name: "Jaraaf",
    image_url: jaraaf,
    description: "Équipementier officiel depuis 2020",
  },
  {
    id: 2,
    team_name: "Douanes",
    image_url: douanes,
    description: "Partenaire pour les équipements d'entraînement",
  },
  {
    id: 3,
    team_name: "Olympique Lyonnais",
    image_url:
      "https://images.unsplash.com/photo-1516731415730-0c607149933a?w=800",
    description: "Fourniture des équipements pour toutes les équipes",
  },
  {
    id: 4,
    team_name: "AS Monaco",
    image_url:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    description: "Collaboration exclusive pour les maillots",
  },
  {
    id: 5,
    team_name: "OGC Nice",
    image_url:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800",
    description: "Partenaire technique officiel",
  },
  {
    id: 6,
    team_name: "LOSC Lille",
    image_url:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800",
    description: "Équipementier principal",
  },
];

export const partenaires = [
  {
    logo: jaraaf,
    alt: "Jaraaf",
    name: "Jaraaf",
    href: "#",
  },
  {
    logo: douanes,
    alt: "Douanes",
    name: "Douanes",
    href: "#",
  },
  {
    logo: gf,
    alt: "gf",
    name: "Académie Génération Foot",
    href: "#",
  },
  {
    logo: wfc,
    alt: "wfc",
    name: "Wallydan FC de Thies ",
    href: "#",
  },
  {
    logo: besport,
    alt: "besport",
    name: "Be Sport ",
    href: "http://www.complexebesport.com",
  },
];

// Données des catégories avec leurs détails
export const categoriesData = [
  {
    id: "handball",
    name: "Handball",
    description: "Ballons, tenues et protections pour la performance.",
    image_url:
      "https://images.unsplash.com/photo-1513028738826-f000cded30a4?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Ballon" },
      { name: "Tenues" },
      { name: "Protections" },
    ],
  },
  {
    id: "recompenses",
    name: "Récompenses",
    description: "Trophées et médailles pour célébrer les victoires.",
    image_url:
      "https://images.unsplash.com/photo-1620764840976-a6752f359c46?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Trophées" },
      { name: "Médailles" },
      { name: "Récompenses" },
    ],
  },
  {
    id: "football",
    name: "Football",
    description: "Equipements et accessoires pour joueurs et clubs.",
    image_url: "/images/Dynasport/wfc-jaraaf2.webp",
    category_tags: [
      { name: "Maillots" },
      { name: "Chaussures" },
      { name: "Ballons" },
    ],
  },
  {
    id: "running",
    name: "Running",
    description: "Chaussures et accessoires pour toutes distances.",
    image_url:
      "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Chaussures" },
      { name: "Vêtements" },
      { name: "Accessoires" },
    ],
  },
  {
    id: "padel",
    name: "Padel",
    description: "Raquettes, balles et equipements adaptes.",
    image_url:
      "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Raquettes" },
      { name: "Balles" },
      { name: "Équipements" },
    ],
  },
  {
    id: "rugby",
    name: "Rugby",
    description: "Accessoires et equipements pour jeu intensif.",
    image_url:
      "https://images.unsplash.com/flagged/photo-1552803516-2c5e71dad4d3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Ballons" },
      { name: "Protections" },
      { name: "Maillots" },
    ],
  },
  {
    id: "tennis",
    name: "Tennis",
    description: "Materiel de competition et d'entrainement",
    image_url:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Raquettes" },
      { name: "Balles" },
      { name: "Chaussures" },
    ],
  },
  {
    id: "fitness",
    name: "Fitness",
    description: "Accessoires et vétements pour entrainement optimal.",
    image_url:
      "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Haltères" },
      { name: "Vêtements" },
      { name: "Accessoires" },
    ],
  },
  {
    id: "basketball",
    name: "Basketball",
    description: "Materiel de jeu et tenues pour toutes surfaces.",
    image_url:
      "https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category_tags: [
      { name: "Ballons" },
      { name: "Chaussures" },
      { name: "Maillots" },
    ],
  },
];

// Produits par catégorie
export const categoryProducts = [
  // Football
  {
    id: "d9f163a9-9374-40eb-8f59-6bbcffe024c0",
    category_id: "football",
    name: "Chaussures de football",
    image_url:
      "https://images.unsplash.com/photo-1724414450740-58299b203161?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Chaussures légères et adhérentes pour une meilleure performance",
    active: true,
  },
  {
    id: "e38905b9-6477-4387-99fa-ad1db1ab0261",
    category_id: "football",
    name: "Ballon de football",
    image_url:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ballon de qualité professionnelle pour entraînement et match",
    active: true,
  },
  {
    id: "d0ac9f87-cdff-4504-a27d-103969470213",
    category_id: "football",
    name: "Maillot de football",
    image_url: "/images/Dynasport/douanes1.jpeg",
    description: "Maillot respirant pour confort et style sur le terrain",
    active: true,
  },
  // Basketball
  {
    id: "31509a03-fadf-4a5d-8ac8-9679a336f55c",
    category_id: "basketball",
    name: "Ballon de basketball",
    image_url:
      "https://images.unsplash.com/photo-1650566924908-db62de4863af?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ballon en cuir synthétique pour une meilleure adhérence",
    active: true,
  },
  {
    id: "bb71b2c5-55b4-4614-ae4b-00263f5e4315",
    category_id: "basketball",
    name: "Chaussures de basketball",
    image_url:
      "https://images.unsplash.com/photo-1618990724322-cc54cd3358e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Chaussures amortissantes pour sauts et accélérations",
    active: true,
  },
  {
    id: "4500a5d9-e263-4a1b-8da5-3e082ce81bcc",
    category_id: "basketball",
    name: "Panier de basketball",
    image_url:
      "https://images.unsplash.com/photo-1675295740728-5497306ebba9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Panier ajustable pour entraînement et jeu en extérieur",
    active: true,
  },
  // Handball
  {
    id: "5e50bd35-8c51-48b1-ba47-d044547202dc",
    category_id: "handball",
    name: "Ballon de handball",
    image_url:
      "https://images.unsplash.com/photo-1664524857259-8ec0123baaf9?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ballon avec grip amélioré pour un meilleur contrôle",
    active: true,
  },
  {
    id: "3bb60355-88fb-454a-a28a-17b183e3301d",
    category_id: "handball",
    name: "Tenue de handball",
    image_url:
      "https://images.unsplash.com/photo-1734683263371-f0787f21788a?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tenue respirante pour une liberté de mouvement optimale",
    active: true,
  },
  // Rugby
  {
    id: "e7539938-7528-4a82-aed7-c2e8a7772902",
    category_id: "rugby",
    name: "Ballon de rugby",
    image_url:
      "https://images.unsplash.com/photo-1686828601235-24f8dbfde37e?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ballon résistant pour entraînements et matchs intenses",
    active: true,
  },
  {
    id: "8913cef8-a29e-4c75-9655-3ce0673cda97",
    category_id: "rugby",
    name: "Maillot de rugby",
    image_url:
      "https://images.unsplash.com/photo-1573056019901-7d8c83cd2c7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Maillot renforcé pour les contacts physiques",
    active: true,
  },
  // Running
  {
    id: "662e3f11-69a3-4184-96da-adb6d51dc3c7",
    category_id: "running",
    name: "Chaussures de running",
    image_url:
      "https://images.unsplash.com/photo-1597892657493-6847b9640bac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Chaussures légères pour courir sur toutes les surfaces",
    active: true,
  },
  {
    id: "ec31cf5e-538d-4e1e-b72a-ba90b1383821",
    category_id: "running",
    name: "Montre de running",
    image_url:
      "https://images.unsplash.com/photo-1706459418431-f68031d1b006?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Montre GPS pour suivre les performances",
    active: true,
  },
  {
    id: "e5664bd2-587b-420e-bbdf-b1743f3444bd",
    category_id: "running",
    name: "T-shirt de running",
    image_url: "/images/Dynasport/besport9.webp",
    description: "T-shirt respirant pour un confort maximal",
    active: true,
  },
  // Padel
  {
    id: "d7e43351-f50b-498c-b414-82163922d542",
    category_id: "padel",
    name: "Raquette de padel",
    image_url: "/images/padel.webp",
    description: "Raquette légère pour un meilleur contrôle",
    active: true,
  },
  {
    id: "1d3b5b25-21e3-4b2c-b078-a16d643d785f",
    category_id: "padel",
    name: "Balles de padel",
    image_url: "/images/ball_paddel.jpg",
    description:
      "Balles résistantes adaptées aux entraînements et compétitions",
    active: true,
  },
  {
    id: "a7a845c8-2383-465e-ad00-092339e71edd",
    category_id: "padel",
    name: "Sac de padel",
    image_url:
      "https://images.unsplash.com/photo-1672223303533-05fddcbf6e6c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sac pratique pour transporter l'équipement",
    active: true,
  },
  // Tennis
  {
    id: "819c75a1-b752-4ba0-9a7f-97ae25a7bf9a",
    category_id: "tennis",
    name: "Raquette de tennis",
    image_url:
      "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Raquette ergonomique pour un meilleur coup",
    active: true,
  },
  {
    id: "c3f6e346-3b31-4277-8fc3-4483c92d7232",
    category_id: "tennis",
    name: "Balles de tennis",
    image_url:
      "https://plus.unsplash.com/premium_photo-1723874567107-e54c34240771?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Balles homologuées pour une longue durée de jeu",
    active: true,
  },
  {
    id: "ddc356f2-5d5c-4157-9cde-d37919112430",
    category_id: "tennis",
    name: "Sac de tennis",
    image_url: "/images/tennis-bag.webp",
    description: "Sac de transport pratique pour raquettes et accessoires",
    active: true,
  },
  // Fitness
  {
    id: "51a6e227-0415-4238-bf20-a622f5e09c27",
    category_id: "fitness",
    name: "Haltères",
    image_url:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Haltères ajustables pour musculation et endurance",
    active: true,
  },
  {
    id: "9cc8bde0-4f7e-4771-a790-7bf35a8313c0",
    category_id: "fitness",
    name: "Tapis de yoga",
    image_url:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tapis antidérapant pour exercices et yoga",
    active: true,
  },
  {
    id: "004bb851-4e01-44c7-8dc8-bd104a7fc1ab",
    category_id: "fitness",
    name: "T-shirt de sport",
    image_url:
      "https://images.unsplash.com/photo-1666358085449-a10a39f33942?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "T-shirt léger et respirant pour un entraînement efficace",
    active: true,
  },
  // Récompenses
  {
    id: "f1a8e227-0415-4238-bf20-a622f5e09c27",
    category_id: "recompenses",
    name: "Trophée Champion",
    image_url:
      "https://images.unsplash.com/photo-1514820720301-4c4790309f46?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Trophée doré pour célébrer les victoires exceptionnelles",
    active: true,
  },
  {
    id: "f2c8bde0-4f7e-4771-a790-7bf35a8313c0",
    category_id: "recompenses",
    name: "Médaille d'Or",
    image_url:
      "https://plus.unsplash.com/premium_photo-1713443924308-dc17828a9932?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Médaille en or pour récompenser l'excellence sportive",
    active: true,
  },
  {
    id: "f34bb851-4e01-44c7-8dc8-bd104a7fc1ab",
    category_id: "recompenses",
    name: "Coupe de la Victoire",
    image_url:
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Coupe prestigieuse pour les tournois et compétitions",
    active: true,
  },
  {
    id: "f45bb851-4e01-44c7-8dc8-bd104a7fc1ab",
    category_id: "recompenses",
    name: "Médaille d'Argent",
    image_url:
      "https://plus.unsplash.com/premium_photo-1713443924308-dc17828a9932?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Médaille en argent pour honorer les performances remarquables",
    active: true,
  },
  {
    id: "f56bb851-4e01-44c7-8dc8-bd104a7fc1ab",
    category_id: "recompenses",
    name: "Plaque Commémorative",
    image_url:
      "https://images.unsplash.com/photo-1716594568176-bed65e6dcb99?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Plaque personnalisable pour événements spéciaux",
    active: true,
  },
  {
    id: "f67bb851-4e01-44c7-8dc8-bd104a7fc1ab",
    category_id: "recompenses",
    name: "Médaille de Bronze",
    image_url:
      "https://plus.unsplash.com/premium_photo-1713443924308-dc17828a9932?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Médaille en bronze pour encourager les efforts",
    active: true,
  },
];
