/*
  # Création des tables pour témoignages et showroom

  1. Nouvelles Tables
    - `testimonials`
      - `id` (uuid, clé primaire)
      - `name` (text, nom du client)
      - `role` (text, poste/rôle)
      - `avatar_url` (text, URL de la photo)
      - `content` (text, contenu du témoignage)
      - `active` (boolean, statut d'affichage)
      - `order` (integer, ordre d'affichage)
      - timestamps

    - `showcase_images`
      - `id` (uuid, clé primaire)
      - `title` (text, titre de l'image)
      - `description` (text, description)
      - `image_url` (text, URL de l'image)
      - `icon` (text, icône associée)
      - `active` (boolean, statut d'affichage)
      - `order` (integer, ordre d'affichage)
      - timestamps

  2. Sécurité
    - Enable RLS pour les deux tables
    - Politiques de lecture publique
    - Politiques de modification pour les admins
*/

-- Table des témoignages
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  avatar_url text NOT NULL,
  content text NOT NULL,
  active boolean DEFAULT true,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des images du showroom
CREATE TABLE IF NOT EXISTS showcase_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  icon text NOT NULL,
  active boolean DEFAULT true,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activation de RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE showcase_images ENABLE ROW LEVEL SECURITY;

-- Politiques pour testimonials
CREATE POLICY "Lecture publique des témoignages"
  ON testimonials
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Modification des témoignages par les admins"
  ON testimonials
  USING (auth.role() = 'authenticated');

-- Politiques pour showcase_images
CREATE POLICY "Lecture publique des images du showroom"
  ON showcase_images
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Modification des images du showroom par les admins"
  ON showcase_images
  USING (auth.role() = 'authenticated');

-- Insertion des données initiales pour les témoignages
INSERT INTO testimonials (name, role, avatar_url, content, "order") VALUES
  (
    'Thomas Martin',
    'Directeur Sportif - FC Marseille',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'DYNASPORTS nous accompagne depuis plus de 5 ans. La qualité des équipements et le service client sont exceptionnels. Une collaboration précieuse pour notre club.',
    1
  ),
  (
    'Sophie Dubois',
    'Présidente - AS Lyon Féminin',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'Un partenaire fiable et professionnel. Les délais sont toujours respectés et la personnalisation des équipements est parfaite. Je recommande vivement.',
    2
  ),
  (
    'Pierre Leroy',
    'Manager - Racing Club Paris',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'La réactivité et le professionnalisme de DYNASPORTS sont remarquables. Nos joueurs sont ravis de la qualité des équipements fournis.',
    3
  ),
  (
    'Marie Lambert',
    'Responsable Achats - Stade Rennais',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'Un service sur-mesure et des produits de grande qualité. DYNASPORTS comprend parfaitement les besoins des clubs professionnels.',
    4
  );

-- Insertion des données initiales pour le showroom
INSERT INTO showcase_images (title, description, image_url, icon, "order") VALUES
  (
    'Design & Innovation',
    'Un showroom de 500m² à la pointe de la technologie',
    'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format',
    '🎯',
    1
  ),
  (
    'Excellence Sportive',
    'Les meilleures marques sélectionnées pour vous',
    'https://images.unsplash.com/photo-1581344549193-ad3bb89ed13b?w=800&auto=format',
    '⚡',
    2
  ),
  (
    'Sur-Mesure',
    'Service de personnalisation premium',
    'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&auto=format',
    '🏆',
    3
  );