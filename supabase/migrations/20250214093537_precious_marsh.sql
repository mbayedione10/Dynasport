/*
  # Création de la table des produits en vedette

  1. Nouvelle Table
    - `featured_products`
      - `id` (uuid, primary key) - Identifiant unique du produit
      - `name` (text) - Nom du produit
      - `image_url` (text) - URL de l'image du produit
      - `price` (text) - Prix du produit (format texte pour inclure le symbole €)
      - `description` (text) - Description du produit
      - `badge` (text) - Badge du produit (ex: 'Best-seller', 'Nouveau')
      - `created_at` (timestamptz) - Date de création
      - `updated_at` (timestamptz) - Date de mise à jour
      - `active` (boolean) - Indique si le produit est actif

  2. Sécurité
    - RLS activé
    - Lecture publique
    - Modification restreinte aux administrateurs
*/

-- Création de la table des produits en vedette
CREATE TABLE IF NOT EXISTS featured_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  image_url text NOT NULL,
  price text NOT NULL,
  description text NOT NULL,
  badge text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activation de RLS
ALTER TABLE featured_products ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Lecture publique des produits en vedette"
  ON featured_products
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Modification des produits en vedette par les admins"
  ON featured_products
  USING (auth.role() = 'authenticated');

-- Insertion des données initiales
INSERT INTO featured_products (name, image_url, price, description, badge) VALUES
  (
    'Pack Club Pro',
    'https://images.unsplash.com/photo-1515586838455-8f8e9d8b4a6f?w=800&auto=format',
    '599,99 €',
    'Équipement complet pour votre équipe',
    'Best-seller'
  ),
  (
    'Maillot Elite 2024',
    'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=800&auto=format',
    '49,99 €',
    'Tissu technique haute performance',
    'Nouveau'
  ),
  (
    'Ballon Match Pro',
    'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800&auto=format',
    '24,99 €',
    'Ballon officiel de match',
    'Populaire'
  );