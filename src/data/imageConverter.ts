import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imageFolder = './public/images/uploads';

async function convertImagesToWebp(folderPath: string) {
    let convertedCount = 0;
    let deletedCount = 0;

    if (!fs.existsSync(folderPath)) {
        console.log(`Le dossier ${folderPath} n'existe pas.`);
        return;
    }

    const files = fs.readdirSync(folderPath);

    for (const filename of files) {
        const filePath = path.join(folderPath, filename);
        const ext = path.extname(filename).toLowerCase();

        if (fs.statSync(filePath).isFile() && ['.jpg', '.jpeg', '.png'].includes(ext)) {
            try {
                const webpFilename = path.basename(filename, ext) + '.webp';
                const webpPath = path.join(folderPath, webpFilename);

                await sharp(filePath).toFormat('webp').toFile(webpPath);
                convertedCount++;

                fs.unlinkSync(filePath);
                deletedCount++;
                console.log(`Converti et supprimé : ${filename}`);
            } catch (error) {
                console.error(`Erreur lors de la conversion de ${filename}:`, error);
            }
        }
    }

    console.log(`\nConversion terminée : ${convertedCount} fichiers convertis, ${deletedCount} fichiers supprimés.`);
}

convertImagesToWebp(imageFolder);
