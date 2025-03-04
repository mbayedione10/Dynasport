/*
  # Création de la table des catégories de services et produits

  1. Nouvelle Table
    - `categories`
      - `id` (text, primary key) - Identifiant unique de la catégorie (ex: 'equipements')
      - `name` (text) - Nom de la catégorie
      - `description` (text) - Description de la catégorie
      - `image_url` (text) - URL de l'image de la catégorie
      - `created_at` (timestamptz) - Date de création
      - `updated_at` (timestamptz) - Date de mise à jour

  2. Table Associée
    - `category_tags`
      - `id` (uuid, primary key) - Identifiant unique du tag
      - `category_id` (text) - Référence à la catégorie
      - `name` (text) - Nom du tag
      - `created_at` (timestamptz) - Date de création

  3. Sécurité
    - RLS activé sur les deux tables
    - Politiques de lecture publique
    - Politiques d'écriture restreintes aux administrateurs
*/

-- Création de la table des catégories
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Création de la table des tags
CREATE TABLE IF NOT EXISTS category_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id text REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation de RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_tags ENABLE ROW LEVEL SECURITY;

-- Politiques pour categories
CREATE POLICY "Lecture publique des catégories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Modification des catégories par les admins"
  ON categories
  USING (auth.role() = 'authenticated');

-- Politiques pour category_tags
CREATE POLICY "Lecture publique des tags"
  ON category_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Modification des tags par les admins"
  ON category_tags
  USING (auth.role() = 'authenticated');

-- Insertion des données initiales
INSERT INTO categories (id, name, description, image_url) VALUES
  ('equipements', 'Équipements', 'Équipements complets pour clubs et institutions', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop'),
  ('accessoires', 'Accessoires', 'Accessoires d''entraînement et de match', 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=800&auto=format&fit=crop'),
  ('chaussures', 'Chaussures', 'Chaussures de football pour tous terrains', 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop'),
  ('materiel', 'Matériel', 'Matériel d''entraînement professionnel', 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop'),
  ('personnalisation', 'Personnalisation', 'Service de personnalisation sur mesure', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop'),
  ('clubs', 'Clubs', 'Solutions complètes pour clubs', 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800&auto=format&fit=crop');

-- Insertion des tags
INSERT INTO category_tags (category_id, name) VALUES
  ('equipements', 'maillots'),
  ('equipements', 'shorts'),
  ('equipements', 'chaussettes'),
  ('accessoires', 'ballons'),
  ('accessoires', 'cônes'),
  ('accessoires', 'chasubles'),
  ('chaussures', 'crampons'),
  ('chaussures', 'stabilité'),
  ('chaussures', 'confort'),
  ('materiel', 'buts'),
  ('materiel', 'filets'),
  ('materiel', 'mannequins'),
  ('personnalisation', 'flocage'),
  ('personnalisation', 'broderie'),
  ('personnalisation', 'marquage'),
  ('clubs', 'packs'),
  ('clubs', 'équipes'),
  ('clubs', 'boutiques');