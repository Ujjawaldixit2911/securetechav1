/**
 * NEX AV - Unified Multi-Design Master Build Script
 * Builds all 10 designs and bundles them into dist/ for seamless Vercel deployment.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const IMAGES_DIR = path.join(__dirname, 'images');
const STATIC_DIR = path.join(__dirname, 'secure', 'static');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('🚀 Starting NEX AV Multi-Design Master Build...\n');

// 1. Clean dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Prepare React Designs (5, 6, 7, 8, 9, 10)
const reactDesigns = [
  { folder: 'design_five', dest: 'design-5' },
  { folder: 'design_six', dest: 'design-6' },
  { folder: 'design_seven', dest: 'design-7' },
  { folder: 'design_eight', dest: 'design-8' },
  { folder: 'design_nine', dest: 'design-9' },
  { folder: 'design_ten', dest: 'design-10' },
];

// Ensure public directories in each React app have all images and static assets
for (const d of reactDesigns) {
  const publicDir = path.join(__dirname, d.folder, 'public');
  fs.mkdirSync(publicDir, { recursive: true });
  copyDirRecursive(IMAGES_DIR, path.join(publicDir, 'images'));
  copyDirRecursive(STATIC_DIR, path.join(publicDir, 'static'));
  
  const logoFile = path.join(IMAGES_DIR, 'nexav_logo.png');
  if (fs.existsSync(logoFile)) {
    fs.copyFileSync(logoFile, path.join(publicDir, 'nexav_logo.png'));
  }
}

// Build all React Designs
for (const d of reactDesigns) {
  const dirPath = path.join(__dirname, d.folder);
  console.log(`📦 Building React ${d.folder} (${d.dest})...`);
  try {
    execSync('npm run build', { cwd: dirPath, stdio: 'inherit' });
    
    const buildDist = path.join(dirPath, 'dist');
    const targetDist = path.join(DIST_DIR, d.dest);
    copyDirRecursive(buildDist, targetDist);
    
    // Copy local assets directly into subfolder so relative paths work instantly
    copyDirRecursive(IMAGES_DIR, path.join(targetDist, 'images'));
    copyDirRecursive(STATIC_DIR, path.join(targetDist, 'static'));
    
    console.log(`✅ Copied ${d.folder} -> dist/${d.dest}/\n`);
  } catch (err) {
    console.error(`❌ Failed building ${d.folder}:`, err.message);
    process.exit(1);
  }
}

// 3. Copy Flask / HTML Designs (1, 2, 3, 4)
const htmlDesigns = [
  { folder: 'design_one', dest: 'design-1' },
  { folder: 'design_two', dest: 'design-2' },
  { folder: 'design_three', dest: 'design-3' },
  { folder: 'design_four', dest: 'design-4' },
];

for (const d of htmlDesigns) {
  console.log(`📄 Setting up static template for ${d.folder} (${d.dest})...`);
  const templatePath = path.join(__dirname, d.folder, 'templates', 'index.html');
  const targetFolder = path.join(DIST_DIR, d.dest);
  fs.mkdirSync(targetFolder, { recursive: true });
  
  if (fs.existsSync(templatePath)) {
    fs.copyFileSync(templatePath, path.join(targetFolder, 'index.html'));
  }
  // Copy images to design subfolder
  copyDirRecursive(IMAGES_DIR, path.join(targetFolder, 'images'));
  copyDirRecursive(STATIC_DIR, path.join(targetFolder, 'static'));
}

// 4. Copy Global Shared Assets at root dist/
console.log('🖼️  Deploying global images and static assets to dist root...');
copyDirRecursive(IMAGES_DIR, path.join(DIST_DIR, 'images'));
copyDirRecursive(STATIC_DIR, path.join(DIST_DIR, 'static'));

// Copy logo to dist root
const logoSrc = path.join(IMAGES_DIR, 'nexav_logo.png');
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(DIST_DIR, 'nexav_logo.png'));
}

// 5. Copy Master Design Hub Landing Page to root dist/index.html
console.log('🏛️  Setting up Master Design Iterations Hub at root dist/index.html...');
const hubSrc = path.join(__dirname, 'hub.html');
if (fs.existsSync(hubSrc)) {
  fs.copyFileSync(hubSrc, path.join(DIST_DIR, 'index.html'));
}

console.log('\n✨ Master Multi-Design Build Complete! All 10 Designs (1 to 10) are ready in dist/\n');
