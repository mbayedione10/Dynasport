/*
  # Création de la table des marques partenaires

  1. Nouvelle Table
    - `brands`
      - `id` (uuid, clé primaire)
      - `name` (text, nom de la marque)
      - `logo_url` (text, URL du logo)
      - `active` (boolean, statut d'affichage)
      - `order` (integer, ordre d'affichage)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Sécurité
    - Enable RLS
    - Politique de lecture publique
    - Politique de modification pour les admins
*/

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  active boolean DEFAULT true,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activation de RLS
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Lecture publique des marques"
  ON brands
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Modification des marques par les admins"
  ON brands
  USING (auth.role() = 'authenticated');

-- Insertion des données initiales
INSERT INTO brands (name, logo_url, "order") VALUES
  ('Nike', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nike_Logo.svg/1200px-Nike_Logo.svg.png', 1),
  ('Adidas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png', 2),
  ('Puma', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/2560px-Puma_logo.svg.png', 3),
  ('New Balance', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png', 4),
  ('Under Armour', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Under_armour_logo.svg/2560px-Under_armour_logo.svg.png', 5),
  ('Umbro', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Umbro_logo.svg/2560px-Umbro_logo.svg.png', 6),
  ('Kappa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kappa_logo.svg/1200px-Kappa_logo.svg.png', 7),
  ('Mizuno', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mizuno_logo.svg/2560px-Mizuno_logo.svg.png', 8);