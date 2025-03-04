const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffprobeInstaller = require('@ffprobe-installer/ffprobe');
const fs = require('fs');
const path = require('path');

// Set the paths manually
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

const inputDir = path.join(__dirname, '../public/Craft');
const outputDir = path.join(inputDir, 'thumbnails');

// Ensure the thumbnails directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all video files in the Craft folder
const videoFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.mp4') || file.endsWith('.mov'));

videoFiles.forEach(file => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, `${path.parse(file).name}-thumb.jpg`);

  ffmpeg(inputFilePath)
    .screenshots({
      timestamps: ['1%'], // Capture a frame at 1% of the video duration
      filename: path.basename(outputFilePath),
      folder: outputDir,
      size: '400x?'
    })
    .on('end', () => console.log(`✅ Thumbnail created: ${outputFilePath}`))
    .on('error', err => console.error(`❌ Error processing ${file}:`, err));
});
