const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const CRAFT_PNG_DIR = path.join(PUBLIC_DIR, 'Craft', 'png');

async function optimizeImage(inputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Create a temporary file
    const tempPath = `${inputPath}.temp`;
    const webpPath = inputPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
    
    // Generate responsive sizes
    const sizes = [640, 1024, 1920];
    const responsiveImages = sizes.map(size => {
      const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/, `-${size}.webp`);
      return image
        .resize(size)
        .webp({ quality: 80 })
        .toFile(outputPath);
    });
    
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
    
    // Generate WebP version
    await image
      .webp({ quality: 80 })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(tempPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log(`Optimized ${path.basename(inputPath)}: ${originalSize} bytes → ${newSize} bytes (${savings}% savings)`);
    console.log(`Generated WebP version: ${path.basename(webpPath)}`);
    
    // Wait for all responsive images to be generated
    await Promise.all(responsiveImages);
    console.log(`Generated responsive sizes for ${path.basename(inputPath)}`);
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
  await processDirectory(CRAFT_PNG_DIR);
  console.log('Image optimization complete!');
}

main().catch(console.error); 