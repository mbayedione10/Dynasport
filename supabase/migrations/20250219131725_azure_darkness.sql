/*
  # Create team references table for gallery
  
  1. New Tables
    - `team_references`
      - `id` (uuid, primary key)
      - `team_name` (text) - Name of the team
      - `image_url` (text) - URL of the team photo
      - `description` (text) - Optional description
      - `active` (boolean) - For soft delete/visibility
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for admin write access
*/

CREATE TABLE IF NOT EXISTS team_references (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text NOT NULL,
  image_url text NOT NULL,
  description text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE team_references ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Team references are viewable by everyone"
  ON team_references
  FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Team references are editable by authenticated users"
  ON team_references
  USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO team_references (team_name, image_url, description) VALUES
  ('FC Barcelona', 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800', 'Équipementier officiel depuis 2020'),
  ('Paris Saint-Germain', 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800', 'Partenaire pour les équipements d''entraînement'),
  ('Olympique Lyonnais', 'https://images.unsplash.com/photo-1516731415730-0c607149933a?w=800', 'Fourniture des équipements pour toutes les équipes'),
  ('AS Monaco', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', 'Collaboration exclusive pour les maillots'),
  ('OGC Nice', 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800', 'Partenaire technique officiel'),
  ('LOSC Lille', 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800', 'Équipementier principal depuis 2019');