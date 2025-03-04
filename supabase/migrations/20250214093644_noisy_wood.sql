/*
  # Suppression du prix des produits en vedette

  1. Modifications
    - Suppression de la colonne `price` de la table `featured_products`
    
  2. Sécurité
    - Les politiques RLS existantes restent inchangées
*/

-- Suppression de la colonne price
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'featured_products' AND column_name = 'price'
  ) THEN
    ALTER TABLE featured_products DROP COLUMN price;
  END IF;
END $$;