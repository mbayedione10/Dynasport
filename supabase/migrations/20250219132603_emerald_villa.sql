/*
  # Fix Team References Policies

  1. Changes
    - Add INSERT policy for authenticated users
    - Add UPDATE policy for authenticated users
    - Add DELETE policy for authenticated users
    - Fix storage policies for team references

  2. Security
    - Maintain public read access
    - Allow authenticated users to manage references
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Team references are editable by authenticated users" ON team_references;

-- Create proper CRUD policies
CREATE POLICY "Team references are insertable by authenticated users"
  ON team_references
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Team references are updatable by authenticated users"
  ON team_references
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Team references are deletable by authenticated users"
  ON team_references
  FOR DELETE
  TO authenticated
  USING (true);

-- Storage policies
DROP POLICY IF EXISTS "Authenticated users can upload team reference images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update their team reference images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete their team reference images" ON storage.objects;

-- Recreate storage policies with proper permissions
CREATE POLICY "Authenticated users can manage team reference images"
  ON storage.objects
  FOR ALL
  TO authenticated
  USING (bucket_id = 'team-references')
  WITH CHECK (bucket_id = 'team-references');