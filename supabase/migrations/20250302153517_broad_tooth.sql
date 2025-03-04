-- Create policies for authenticated users to manage team references
CREATE POLICY "Allow authenticated users to insert team references"
  ON team_references
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update team references"
  ON team_references
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete team references"
  ON team_references
  FOR DELETE
  TO authenticated
  USING (true);

-- Create policies for storage
CREATE POLICY "Allow authenticated users to upload team reference images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'team-references');

CREATE POLICY "Allow authenticated users to update team reference images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'team-references');

CREATE POLICY "Allow authenticated users to delete team reference images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'team-references');