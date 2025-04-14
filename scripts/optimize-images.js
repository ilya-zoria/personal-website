const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function optimizeImage(inputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Create a temporary file
    const tempPath = `${inputPath}.temp`;
    
    // Optimize based on file type
    if (metadata.format === 'png') {
      await image
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tempPath);
    } else if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      await image
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tempPath);
    } else {
      console.log(`Skipping ${inputPath} - unsupported format: ${metadata.format}`);
      return;
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(tempPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log(`Optimized ${path.basename(inputPath)}: ${originalSize} bytes → ${newSize} bytes (${savings}% savings)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await processDirectory(IMAGES_DIR);
  console.log('Image optimization complete!');
}

main().catch(console.error); 