# 🚀 NEX AV - Enterprise Audio-Visual Experience Hub

> **Premium Multi-Design Enterprise Portal showcasing state-of-the-art Audio-Visual & Acoustic Integration Systems.**

[![Vercel Deployment](https://img.shields.io/badge/Deploy%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Python / Flask](https://img.shields.io/badge/Python-Flask-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://flask.palletsprojects.com)

---

## 🌟 Overview

**NEX AV** is a cutting-edge, enterprise-grade web application platform featuring **10 unique design archetypes** for commercial AV integrators, smart courtroom systems, high-end boardrooms, university smart auditoriums, and convention centers.

This repository includes both modern **React + Vite** frontend applications and **Python Flask** multi-page experiences, unified by a central interactive launcher and full Vercel deployment support.

---

## 🎨 Design Catalog

| # | Design Name | Tech Stack | Port | Aesthetic / Highlights |
|---|---|---|---|---|
| **01** | **Cyberpunk Neon Grid** | Flask / Jinja2 | `5001` | Futuristic dark neon aesthetic with AV command grid |
| **02** | **Minimalist Precision** | Flask / Jinja2 | `5002` | Crisp, high-contrast layouts & clean typography |
| **03** | **Bento Grid Modern** | Flask / Jinja2 | `5003` | Modular interactive bento grid showcasing AV solutions |
| **04** | **3D Spatial Switcher** | Flask / Jinja2 | `5004` | Dynamic 3D interactive layout & soundstage demo |
| **05** | **Corporate Tech React** | React + Vite | `5005` | High-performance enterprise components & solutions catalog |
| **06** | **Ultra Premium Glass** | React + Vite | `5006` | Glassmorphism, luxury typography & smooth micro-interactions |
| **07** | **Executive Light Studio**| React + Vite | `5007` | Clean studio lighting, bright executive contrast & lead capture |
| **08** | **Deep Navy & Teal** | React + Vite | `5008` | Mission-critical NOC / AV command centers & control room UI |
| **09** | **Electric Cyan & Boardroom**| React + Vite | `5009` | Smart boardroom systems & enterprise AV engineering |
| **10** | **Cinematic Obsidian (Flagship)**| React + Vite | `5010` | 🌟 Flagship cinematic experience with full solution stack |

---

## 🛠️ Project Structure

```text
nexav/
├── design_one/         # Flask - Cyberpunk Neon Grid
├── design_two/         # Flask - Minimalist Precision
├── design_three/       # Flask - Bento Grid Modern
├── design_four/        # Flask - 3D Spatial Switcher
├── design_five/        # React + Vite - Corporate Tech
├── design_six/         # React + Vite - Ultra Premium Glass
├── design_seven/       # React + Vite - Executive Light Studio
├── design_eight/       # React + Vite - Deep Navy & Teal
├── design_nine/        # React + Vite - Electric Cyan
├── design_ten/         # React + Vite - Flagship Cinematic Obsidian
├── images/             # High-resolution AV showcase assets
├── secure/             # Core Flask website & static resources
├── hub_server.py       # Master Web Hub (http://localhost:5000)
├── launch_menu.py      # Terminal Launcher
├── convert_to_pdf.py   # Automated HTML Presentation to PDF Converter
├── convert_to_webp.py  # Image optimization tool
├── vercel.json         # Production Vercel configuration
└── package.json        # Unified build scripts & root manager
```

---

## ⚡ Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)
- **Git**

### 2. Launch the Master Interactive Hub
```bash
# Start the central dashboard on http://localhost:5000
python hub_server.py
```
*Or double click `start_hub.bat` on Windows.*

### 3. Or Launch via Terminal Menu
```bash
python launch_menu.py
```

### 4. Run Any Specific React Design Directly
```bash
# Example for Design 10 (Flagship)
cd design_ten
npm install
npm run dev
```

---

## 🚀 Vercel Deployment Guide

This repository is pre-configured for **instant zero-config deployment on Vercel**.

### Step 1: Import Repository
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select your GitHub repository: `Ujjawaldixit2911/securetechav1`.

### Step 2: Deployment Settings
Vercel will automatically read `vercel.json` and `package.json`:
- **Framework Preset**: Vite / Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Deploy
Click **Deploy**! Your site will be live on a fast global edge network.

> 💡 **Customizing the Default Deployed Design**:  
> In `package.json`, the default `build` script runs `npm run build:ten`.  
> To deploy a different design by default, simply change `"build": "npm run build:ten"` to `"npm run build:nine"`, `"npm run build:eight"`, etc.

---

## 🧰 Utility Tools

- **Convert Slide Deck / Profile to PDF**:
  ```bash
  python convert_to_pdf.py --input path/to/page.html --output Corporate_Profile.pdf
  ```
- **WebP Image Compression**:
  ```bash
  python convert_to_webp.py
  ```

---

## 📄 License & Attribution

Designed and maintained for **NEX AV / NEX AV Integrators**.  
All rights reserved © 2026.
