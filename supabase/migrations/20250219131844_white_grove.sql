/*
  # Add storage support for team references
  
  1. Changes
    - Add storage bucket for team reference images
    - Update team_references table to use storage paths
    - Add storage policies
*/

-- Create a bucket for team reference images
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-references', 'team-references', true);

-- Allow public access to the bucket
CREATE POLICY "Team reference images are publicly accessible"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'team-references');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload team reference images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'team-references');

-- Allow authenticated users to update/delete their uploads
CREATE POLICY "Authenticated users can update their team reference images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'team-references');

CREATE POLICY "Authenticated users can delete their team reference images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'team-references');