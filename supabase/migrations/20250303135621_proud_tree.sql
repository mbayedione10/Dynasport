/*
  # Create products table for categories

  1. New Tables
    - `category_products`
      - `id` (uuid, primary key)
      - `category_id` (text, foreign key to categories)
      - `name` (text)
      - `image_url` (text)
      - `description` (text)
      - `active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `category_products` table
    - Add policies for public read access
    - Add policies for authenticated users to manage products
*/

CREATE TABLE IF NOT EXISTS category_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id text REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  image_url text NOT NULL,
  description text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE category_products ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Category products are viewable by everyone"
  ON category_products
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Category products are insertable by authenticated users"
  ON category_products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Category products are updatable by authenticated users"
  ON category_products
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Category products are deletable by authenticated users"
  ON category_products
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data from existing static data
INSERT INTO category_products (category_id, name, image_url, description) VALUES
  -- Équipements
  ('equipements', 'Maillot Pro Elite', 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=500&auto=format', 'Maillot professionnel personnalisable'),
  ('equipements', 'Short Match Pro', 'https://images.unsplash.com/photo-1515586838455-8f8e9d8b4a6f?w=500&auto=format', 'Short de match respirant'),
  ('equipements', 'Pack Équipement Complet', 'https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?w=500&auto=format', 'Ensemble complet maillot + short + chaussettes'),
  
  -- Accessoires
  ('accessoires', 'Ballon Match Pro', 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&auto=format', 'Ballon de match officiel'),
  ('accessoires', 'Set de Cônes Pro', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format', 'Set de 20 cônes d''entraînement'),
  ('accessoires', 'Chasubles Training', 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=500&auto=format', 'Lot de 10 chasubles d''entraînement'),
  
  -- Chaussures
  ('chaussures', 'Crampons Elite Pro', 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&auto=format', 'Chaussures professionnelles haute performance'),
  ('chaussures', 'Stabilité Plus', 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format', 'Chaussures stabilité renforcée'),
  ('chaussures', 'Indoor Pro', 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&auto=format', 'Chaussures spéciales futsal'),
  
  -- Matériel
  ('materiel', 'But Pro Training', 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&auto=format', 'But d''entraînement professionnel'),
  ('materiel', 'Filet Haute Résistance', 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=500&auto=format', 'Filet renforcé pour but standard'),
  ('materiel', 'Mannequin Pro', 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=500&auto=format', 'Mannequin d''entraînement professionnel');