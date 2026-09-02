# 🚀 NEX AV - Enterprise Audio-Visual Experience Hub

> **Premium Multi-Design Enterprise Portal showcasing state-of-the-art Audio-Visual & Acoustic Integration Systems.**

[![Vercel Deployment](https://img.shields.io/badge/Deploy%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Python / Flask](https://img.shields.io/badge/Python-Flask-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://flask.palletsprojects.com)

---

## 🌟 Live Design Iterations Hub

When deployed on **Vercel**, the single main link opens the **Master Design Iterations Hub** (`/`), where you can click and preview **any of the 10 designs** instantly:

| URL Route | Design Name | Tech Stack | Aesthetic / Highlights |
|---|---|---|---|
| `/` | **Design Iterations Hub** | Master Portal | 🏛️ Central selector card grid to launch any design |
| `/design-10/` | **Design 10 (Flagship)** | React + Vite | 🌟 Cinematic luxury experience with full solution stack |
| `/design-9/` | **Design 9 (Electric Cyan)** | React + Vite | Smart boardroom systems & enterprise AV engineering |
| `/design-8/` | **Design 8 (Navy & Teal)** | React + Vite | Mission-critical NOC / AV command centers & control room UI |
| `/design-7/` | **Design 7 (Light Studio)**| React + Vite | Clean studio lighting, bright executive contrast & configurator |
| `/design-6/` | **Design 6 (Glassmorphism)**| React + Vite | Glassmorphism aesthetics & luxury AV integrator UI |
| `/design-5/` | **Design 5 (Corporate Tech)**| React + Vite | High-performance enterprise components & solutions catalog |
| `/design-4/` | **Design 4 (3D Spatial)** | Flask / HTML | Dynamic 3D interactive layout & soundstage demo |
| `/design-3/` | **Design 3 (Bento Grid)** | Flask / HTML | Modular interactive bento grid showcasing AV solutions |
| `/design-2/` | **Design 2 (Minimalist)** | Flask / HTML | Crisp, high-contrast layouts & clean typography |
| `/design-1/` | **Design 1 (Cyberpunk)** | Flask / HTML | Futuristic dark neon aesthetic with AV command grid |
| `/original/` | **Original Corporate Portal** | Multi-Page | Comprehensive corporate acoustic & portfolio presentation |

---

## 🛠️ Project Structure

```text
nexav/
├── build-all.js        # Master bundler for all 10 designs into /dist
├── hub.html            # Master Design Iterations Hub landing page
├── design_one/         # Design 1 (Cyberpunk Neon Grid)
├── design_two/         # Design 2 (Minimalist Precision)
├── design_three/       # Design 3 (Bento Grid Modern)
├── design_four/        # Design 4 (3D Spatial Switcher)
├── design_five/        # Design 5 (Corporate Tech React)
├── design_six/         # Design 6 (Ultra Premium Glass React)
├── design_seven/       # Design 7 (Executive Light Studio React)
├── design_eight/       # Design 8 (Deep Navy & Teal React)
├── design_nine/        # Design 9 (Electric Cyan React)
├── design_ten/         # Design 10 (Flagship Cinematic Obsidian React)
├── images/             # High-resolution AV showcase assets
├── secure/             # Core Flask website & static resources
├── hub_server.py       # Local Master Web Hub (http://localhost:5000)
├── launch_menu.py      # Local Terminal Launcher
├── vercel.json         # Production Vercel configuration
└── package.json        # Unified build scripts & root manager
```

---

## ⚡ Quick Start (Local Development)

### 1. Launch the Local Master Interactive Hub
```bash
python hub_server.py
```
*Or double click `start_hub.bat` on Windows.*

### 2. Build All Designs for Production
```bash
npm run build
```

---

## 🚀 Vercel Deployment Guide

1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select your GitHub repository: `Ujjawaldixit2911/securetechav1`.
3. Vercel will automatically detect `vercel.json` and build **all 10 designs + Master Hub** into `dist/`.
4. Click **Deploy**.
5. Once deployed, opening your Vercel URL will display the **Design Iterations Hub** with direct links to every design!

---

## 📄 License & Attribution

Designed and maintained for **NEX AV / NEX AV Integrators**.  
All rights reserved © 2026.
