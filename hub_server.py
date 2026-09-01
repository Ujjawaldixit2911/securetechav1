"""
NEX AV - Unified Design Hub & Master Launcher
Runs on http://localhost:5000
Allows selecting, auto-launching, and live-previewing any of the 10 NEX AV designs.
"""

import os
import sys
import time
import socket
import subprocess
import threading
import webbrowser

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass
from flask import Flask, render_template_string, jsonify, request, redirect

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DESIGNS = {
    1: {
        "id": 1,
        "name": "Design 1",
        "title": "Cyberpunk Neon Grid",
        "tagline": "Futuristic neon cyber aesthetic with AV command grid",
        "type": "Flask / Jinja2",
        "category": "Flask",
        "theme": "Cyberpunk Dark",
        "port": 5001,
        "folder": "design_one",
        "cmd": [sys.executable, "app.py"],
        "color": "#06b6d4",
        "bg_gradient": "linear-gradient(135deg, #0f172a 0%, #083344 100%)",
        "accent": "#22d3ee",
        "badge": "Cyber Theme"
    },
    2: {
        "id": 2,
        "name": "Design 2",
        "title": "Minimalist Precision",
        "tagline": "Sleek, airy modern layout with sharp lines & clean typography",
        "type": "Flask / Jinja2",
        "category": "Flask",
        "theme": "Minimalist Dark/Light",
        "port": 5002,
        "folder": "design_two",
        "cmd": [sys.executable, "app.py"],
        "color": "#6366f1",
        "bg_gradient": "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)",
        "accent": "#818cf8",
        "badge": "Minimalist"
    },
    3: {
        "id": 3,
        "name": "Design 3",
        "title": "Bento Grid Modern",
        "tagline": "Interactive modular bento grid showcasing AV solutions",
        "type": "Flask / Jinja2",
        "category": "Flask",
        "theme": "Bento Grid",
        "port": 5003,
        "folder": "design_three",
        "cmd": [sys.executable, "app.py"],
        "color": "#10b981",
        "bg_gradient": "linear-gradient(135deg, #064e3b 0%, #0f172a 100%)",
        "accent": "#34d399",
        "badge": "Bento Grid"
    },
    4: {
        "id": 4,
        "name": "Design 4",
        "title": "3D Spatial Switcher",
        "tagline": "Dynamic 3D perspectives & immersive AV showcase",
        "type": "Flask / Jinja2",
        "category": "Flask",
        "theme": "3D Interactive",
        "port": 5004,
        "folder": "design_four",
        "cmd": [sys.executable, "app.py"],
        "color": "#f59e0b",
        "bg_gradient": "linear-gradient(135deg, #451a03 0%, #0f172a 100%)",
        "accent": "#fbbf24",
        "badge": "3D Spatial"
    },
    5: {
        "id": 5,
        "name": "Design 5",
        "title": "Corporate Tech React",
        "tagline": "High-performance React corporate portal with enterprise components",
        "type": "React + Vite",
        "category": "React",
        "theme": "Corporate Tech",
        "port": 5005,
        "folder": "design_five",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#3b82f6",
        "bg_gradient": "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
        "accent": "#60a5fa",
        "badge": "React Enterprise"
    },
    6: {
        "id": 6,
        "name": "Design 6",
        "title": "Ultra Premium Glass",
        "tagline": "Glassmorphism aesthetics & luxury AV integrator UI",
        "type": "React + Vite",
        "category": "React",
        "theme": "Glassmorphism",
        "port": 5006,
        "folder": "design_six",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#ec4899",
        "bg_gradient": "linear-gradient(135deg, #831843 0%, #0f172a 100%)",
        "accent": "#f472b6",
        "badge": "Glassmorphism"
    },
    7: {
        "id": 7,
        "name": "Design 7",
        "title": "Executive Light Studio",
        "tagline": "Bright, elegant enterprise presentation with crisp contrast",
        "type": "React + Vite",
        "category": "React",
        "theme": "Light Executive",
        "port": 5007,
        "folder": "design_seven",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#0284c7",
        "bg_gradient": "linear-gradient(135deg, #0369a1 0%, #0f172a 100%)",
        "accent": "#38bdf8",
        "badge": "Light / Studio"
    },
    8: {
        "id": 8,
        "name": "Design 8",
        "title": "Deep Navy & Teal",
        "tagline": "Security operations, command centers & AV control rooms",
        "type": "React + Vite",
        "category": "React",
        "theme": "Deep Navy / Teal",
        "port": 5008,
        "folder": "design_eight",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#14b8a6",
        "bg_gradient": "linear-gradient(135deg, #134e4a 0%, #0f172a 100%)",
        "accent": "#2dd4bf",
        "badge": "Navy & Teal"
    },
    9: {
        "id": 9,
        "name": "Design 9",
        "title": "Electric Cyan & Boardroom",
        "tagline": "Smart boardroom systems & enterprise audio-visual engineering",
        "type": "React + Vite",
        "category": "React",
        "theme": "Electric Cyan",
        "port": 5009,
        "folder": "design_nine",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#06b6d4",
        "bg_gradient": "linear-gradient(135deg, #164e63 0%, #0f172a 100%)",
        "accent": "#22d3ee",
        "badge": "Smart Boardroom"
    },
    10: {
        "id": 10,
        "name": "Design 10",
        "title": "Cinematic Royal Blue & Obsidian",
        "tagline": "Flagship cinematic experience with interactive solution stack",
        "type": "React + Vite",
        "category": "React",
        "theme": "Cinematic Obsidian",
        "port": 5010,
        "folder": "design_ten",
        "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"],
        "color": "#8b5cf6",
        "bg_gradient": "linear-gradient(135deg, #4c1d95 0%, #0f172a 100%)",
        "accent": "#a78bfa",
        "badge": "Flagship 10"
    }
}

running_processes = {}
process_lock = threading.Lock()

def is_port_open(port):
    """Check if a port is actively responding."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex(('127.0.0.1', port)) == 0

def start_design_process(design_id):
    """Start the subprocess for a specific design if not already running."""
    if design_id not in DESIGNS:
        return False, "Invalid design ID"
    
    design = DESIGNS[design_id]
    port = design["port"]
    
    if is_port_open(port):
        return True, f"Design {design_id} is already running on port {port}"
    
    folder_path = os.path.join(BASE_DIR, design["folder"])
    if not os.path.exists(folder_path):
        return False, f"Directory {folder_path} not found"
    
    with process_lock:
        try:
            # Launch process in background
            p = subprocess.Popen(
                design["cmd"],
                cwd=folder_path,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                shell=False
            )
            running_processes[design_id] = p
            
            # Wait up to 5 seconds for port to open
            for _ in range(25):
                time.sleep(0.2)
                if is_port_open(port):
                    return True, f"Started Design {design_id} on port {port}"
            
            return True, f"Spawned Design {design_id}, warming up on port {port}..."
        except Exception as e:
            return False, f"Failed to start Design {design_id}: {str(e)}"

def stop_design_process(design_id):
    """Stop the subprocess for a specific design."""
    with process_lock:
        p = running_processes.get(design_id)
        if p:
            try:
                p.terminate()
                p.wait(timeout=2)
            except Exception:
                try:
                    p.kill()
                except Exception:
                    pass
            running_processes.pop(design_id, None)
            return True, f"Stopped Design {design_id}"
        return True, f"Design {design_id} process was not tracked"

app = Flask(__name__)

HUB_HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEX AV - Design Selector Hub</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #070b13;
      --bg-card: rgba(15, 23, 42, 0.75);
      --bg-card-hover: rgba(30, 41, 59, 0.85);
      --border-color: rgba(255, 255, 255, 0.1);
      --border-hover: rgba(56, 189, 248, 0.4);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --cyan: #06b6d4;
      --blue: #3b82f6;
      --emerald: #10b981;
      --purple: #8b5cf6;
      --amber: #f59e0b;
      --radius-xl: 18px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      min-height: 100vh;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 15% 15%, rgba(6, 182, 212, 0.15), transparent 40%),
        radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.12), transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent 60%);
      background-attachment: fixed;
    }

    /* Top Navbar */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(7, 11, 19, 0.85);
      border-bottom: 1px solid var(--border-color);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      color: white;
    }

    .brand-logo-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #0284c7, #06b6d4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Outfit', sans-serif;
      font-weight: 900;
      font-size: 20px;
      color: white;
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
    }

    .brand-text h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      background: linear-gradient(90deg, #ffffff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-text p {
      font-size: 0.75rem;
      color: var(--cyan);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 600;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid transparent;
      text-decoration: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0284c7, #06b6d4);
      color: white;
      box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.06);
      color: var(--text-main);
      border-color: var(--border-color);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.25);
    }

    /* Hero Section */
    .hero {
      max-width: 1300px;
      margin: 0 auto;
      padding: 3rem 2rem 1.5rem;
      text-align: center;
    }

    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 30px;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: var(--cyan);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .hero h2 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -1px;
      margin-bottom: 1rem;
    }

    .hero h2 span {
      background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      color: var(--text-muted);
      font-size: 1.1rem;
      max-width: 700px;
      margin: 0 auto 2rem;
      line-height: 1.6;
    }

    /* Filter & Search Bar */
    .toolbar {
      max-width: 1300px;
      margin: 0 auto 2rem;
      padding: 0 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .filter-group {
      display: flex;
      background: rgba(15, 23, 42, 0.6);
      padding: 4px;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      gap: 4px;
    }

    .filter-btn {
      padding: 8px 16px;
      border-radius: 8px;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .filter-btn.active, .filter-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #0284c7, #06b6d4);
      color: white;
    }

    .status-summary {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    .status-indicator {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.9); }
    }

    /* Grid Layout */
    .grid {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 2rem 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
    }

    /* Design Card */
    .card {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-xl);
      padding: 1.75rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--card-accent, #06b6d4);
      opacity: 0.8;
      transition: height 0.3s;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: var(--border-hover);
      background: var(--bg-card-hover);
      box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.5), 0 0 25px -5px rgba(6, 182, 212, 0.15);
    }

    .card:hover::before {
      height: 6px;
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .design-number {
      font-family: 'Outfit', sans-serif;
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--card-accent, #06b6d4);
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
    }

    .live-status-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
    }

    .live-status-pill.online {
      background: rgba(16, 185, 129, 0.12);
      border-color: rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    .live-status-pill.online .dot {
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
    }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #64748b;
    }

    .card-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: white;
    }

    .card-desc {
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;
    }

    .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 1.5rem;
    }

    .meta-tag {
      font-size: 0.75rem;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      font-weight: 500;
    }

    .card-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1.5rem;
    }

    .btn-launch {
      width: 100%;
      background: linear-gradient(135deg, var(--card-accent, #0284c7), #06b6d4);
      color: white;
      font-weight: 700;
      justify-content: center;
      padding: 12px 16px;
      border-radius: 10px;
      font-size: 0.95rem;
    }

    .btn-launch:hover {
      box-shadow: 0 0 22px rgba(6, 182, 212, 0.5);
      transform: translateY(-2px);
    }

    .card-device-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 5px 8px;
      gap: 6px;
    }

    .device-opt-label {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding-left: 2px;
    }

    .device-opt-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-color);
      color: #e2e8f0;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .device-opt-btn:hover {
      background: var(--cyan);
      color: #070b13;
      border-color: var(--cyan);
      transform: translateY(-1px);
    }

    /* Modal / Switcher Viewer */
    .viewer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.88);
      backdrop-filter: blur(15px);
      z-index: 1000;
      display: none;
      flex-direction: column;
    }

    .viewer-overlay.active {
      display: flex;
    }

    .viewer-header {
      background: #0b1120;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
    }

    .viewer-title-group {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .viewer-select {
      background: #1e293b;
      color: white;
      border: 1px solid var(--border-color);
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      outline: none;
    }

    .viewer-device-toggles {
      display: flex;
      gap: 6px;
      background: #1e293b;
      padding: 4px;
      border-radius: 8px;
    }

    .device-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .device-btn.active {
      background: var(--cyan);
      color: #070b13;
    }

    .viewer-body {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      position: relative;
      background: #020617;
    }

    .viewer-iframe-wrapper {
      width: 100%;
      height: 100%;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      transition: width 0.3s ease;
      position: relative;
    }

    .viewer-iframe-wrapper.tablet {
      width: 768px;
    }

    .viewer-iframe-wrapper.mobile {
      width: 390px;
    }

    .viewer-iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .loading-spinner-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      display: none;
      z-index: 10;
    }

    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid rgba(6, 182, 212, 0.2);
      border-top-color: var(--cyan);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 16px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* First-time greeting banner */
    .ask-modal {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
      border: 1px solid var(--border-hover);
      border-radius: 16px;
      padding: 1.75rem 2rem;
      max-width: 1300px;
      margin: 0 auto 2.5rem;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .ask-modal-content h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 4px;
      color: #ffffff;
    }

    .ask-modal-content p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .quick-pill-select {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .quick-pill {
      padding: 8px 14px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--border-color);
      color: white;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s;
    }

    .quick-pill:hover {
      background: var(--cyan);
      color: #070b13;
      transform: translateY(-2px);
    }

    /* Toast Notification */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      border: 1px solid var(--cyan);
      color: white;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
      z-index: 2000;
      display: none;
    /* Mobile & Tablet Responsive Media Queries */
    @media (max-width: 900px) {
      .grid { grid-template-columns: 1fr; padding: 0 1rem 3rem; }
      .navbar { padding: 0.8rem 1rem; }
      .toolbar { padding: 0 1rem; flex-direction: column; align-items: flex-start; }
      .hero { padding: 2rem 1rem 1rem; }
      .ask-modal { padding: 1.25rem 1rem; margin: 0 1rem 1.5rem; }
    }

    @media (max-width: 600px) {
      .navbar { flex-direction: column; gap: 10px; align-items: flex-start; }
      .nav-actions { width: 100%; justify-content: space-between; }
      .nav-actions .btn { flex: 1; justify-content: center; font-size: 0.75rem; padding: 8px; }
      .filter-group { width: 100%; overflow-x: auto; }
      .card-actions { grid-template-columns: 1fr; }
      .card-actions .btn-preview, .card-actions .btn-direct { grid-column: span 1; }
      .viewer-header { flex-direction: column; gap: 8px; align-items: flex-start; }
      .viewer-device-toggles { display: none; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <a href="/" class="brand">
      <div class="brand-logo-badge">NX</div>
      <div class="brand-text">
        <h1>NEX AV</h1>
        <p>Unified Design Hub</p>
      </div>
    </a>
    <div class="nav-actions">
      <button class="btn btn-secondary" onclick="startAllServers()">
        ⚡ Start All 10 Designs
      </button>
      <button class="btn btn-secondary" onclick="checkAllStatus()">
        🔄 Refresh Status
      </button>
    </div>
  </nav>

  <!-- Hero Header -->
  <header class="hero">
    <div class="hero-tag">
      <span>🚀</span> All 10 NEX AV Interactive Prototypes Ready
    </div>
    <h2>Choose Which Design You Want To Explore</h2>
    <p>Select any design below to launch it instantly in a new window or use our integrated live switcher to compare all layouts side-by-side.</p>
  </header>

  <!-- Toolbar & Filters -->
  <div class="toolbar">
    <div class="filter-group">
      <button class="filter-btn active" onclick="filterCards('all', this)">All (10)</button>
      <button class="filter-btn" onclick="filterCards('React', this)">React + Vite (6)</button>
      <button class="filter-btn" onclick="filterCards('Flask', this)">Flask Full-Stack (4)</button>
    </div>
    <div class="status-summary">
      <span class="status-indicator"></span>
      <span id="running-count-text">Checking live servers...</span>
    </div>
  </div>

  <!-- Cards Grid -->
  <main class="grid" id="design-grid">
    {% for id, d in designs.items() %}
    <div class="card" data-category="{{ d.category }}" style="--card-accent: {{ d.color }};">
      <div>
        <div class="card-top">
          <span class="design-number">Design {{ d.id }}</span>
          <div class="live-status-pill" id="status-pill-{{ d.id }}">
            <span class="dot"></span>
            <span class="status-label">Port {{ d.port }}</span>
          </div>
        </div>
        <h3 class="card-title">{{ d.title }}</h3>
        <p class="card-desc">{{ d.tagline }}</p>
        <div class="card-meta">
          <span class="meta-tag" style="border-color: {{ d.color }}40; color: {{ d.accent }};">✨ {{ d.badge }}</span>
          <span class="meta-tag">⚙️ {{ d.type }}</span>
          <span class="meta-tag">🔌 Port :{{ d.port }}</span>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="btn btn-launch" onclick="launchAndOpen({{ id }}, '{{ d.port }}')">
          🚀 Launch & Open Design {{ id }}
        </button>
        <div class="card-device-options">
          <span class="device-opt-label">Quick Preview:</span>
          <button class="device-opt-btn" onclick="openEmbeddedViewer({{ id }}, '{{ d.port }}', 'desktop')" title="Preview in Desktop mode">
            💻 Desktop
          </button>
          <button class="device-opt-btn" onclick="openEmbeddedViewer({{ id }}, '{{ d.port }}', 'tablet')" title="Preview in Tablet mode">
            📱 Tablet
          </button>
          <button class="device-opt-btn" onclick="openEmbeddedViewer({{ id }}, '{{ d.port }}', 'mobile')" title="Preview in Mobile mode">
            📲 Mobile
          </button>
        </div>
      </div>
    </div>
    {% endfor %}
  </main>

  <!-- Live Switcher Viewport Overlay -->
  <div class="viewer-overlay" id="viewer-overlay">
    <div class="viewer-header">
      <div class="viewer-title-group">
        <span style="font-weight: 800; color: var(--cyan); font-family: 'Outfit';">NEX AV</span>
        <select class="viewer-select" id="viewer-design-select" onchange="switchViewerDesign(this.value)">
          {% for id, d in designs.items() %}
          <option value="{{ id }}" data-port="{{ d.port }}">
            Design {{ id }}: {{ d.title }} (Port {{ d.port }})
          </option>
          {% endfor %}
        </select>
      </div>

      <div class="viewer-device-toggles">
        <button class="device-btn active" onclick="setDeviceMode('desktop', this)">🖥️ Desktop</button>
        <button class="device-btn" onclick="setDeviceMode('tablet', this)">📱 Tablet</button>
        <button class="device-btn" onclick="setDeviceMode('mobile', this)">📱 Mobile</button>
      </div>

      <div style="display: flex; gap: 10px; align-items: center;">
        <button class="btn btn-secondary" onclick="openCurrentInNewTab()" style="padding: 6px 12px; font-size: 0.8rem;">
          ↗️ Full Tab
        </button>
        <button class="btn btn-secondary" onclick="closeViewer()" style="padding: 6px 14px; font-weight: 800;">
          ✕ Close
        </button>
      </div>
    </div>

    <div class="viewer-body">
      <div class="loading-spinner-box" id="viewer-loader">
        <div class="spinner"></div>
        <p id="viewer-loader-text">Starting server for design...</p>
      </div>
      <div class="viewer-iframe-wrapper" id="iframe-wrapper">
        <iframe class="viewer-iframe" id="viewer-iframe" src="about:blank"></iframe>
      </div>
    </div>
  </div>

  <div class="toast" id="toast">Notification</div>

  <script>
    const DESIGNS = {{ designs_json|safe }};
    let currentViewerId = 1;

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.innerText = msg;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 3500);
    }

    async function checkAllStatus() {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        let runningCount = 0;
        
        for (const [id, info] of Object.entries(data)) {
          const pill = document.getElementById(`status-pill-${id}`);
          if (pill) {
            if (info.online) {
              pill.className = 'live-status-pill online';
              pill.querySelector('.status-label').innerText = `Online (: ${info.port})`;
              runningCount++;
            } else {
              pill.className = 'live-status-pill';
              pill.querySelector('.status-label').innerText = `Offline (: ${info.port})`;
            }
          }
        }
        
        document.getElementById('running-count-text').innerText = `${runningCount} of 10 Designs Online`;
      } catch (err) {
        console.error('Failed to fetch status:', err);
      }
    }

    async function startAllServers() {
      showToast('⚡ Starting all 10 design servers in the background...');
      try {
        const res = await fetch('/api/start-all', { method: 'POST' });
        const data = await res.json();
        showToast(data.message || 'All servers initiated!');
        setTimeout(checkAllStatus, 3000);
      } catch (err) {
        showToast('Error starting servers: ' + err);
      }
    }

    async function launchAndOpen(id, port) {
      showToast(`🚀 Starting Design ${id} on port ${port}...`);
      try {
        const res = await fetch(`/api/start/${id}`, { method: 'POST' });
        const data = await res.json();
        
        // Wait 1.5s for Vite / Flask warm up
        setTimeout(() => {
          window.open(`http://localhost:${port}`, '_blank');
          checkAllStatus();
        }, 1500);
      } catch (e) {
        window.open(`http://localhost:${port}`, '_blank');
      }
    }

    async function openEmbeddedViewer(id, port, deviceMode = 'desktop') {
      currentViewerId = id;
      document.getElementById('viewer-design-select').value = id;
      const overlay = document.getElementById('viewer-overlay');
      const loader = document.getElementById('viewer-loader');
      const loaderText = document.getElementById('viewer-loader-text');
      const iframe = document.getElementById('viewer-iframe');
      const wrapper = document.getElementById('iframe-wrapper');
      
      // Update device buttons and wrapper mode
      document.querySelectorAll('.device-btn').forEach(b => {
        if (b.innerText.toLowerCase().includes(deviceMode)) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      wrapper.className = 'viewer-iframe-wrapper ' + (deviceMode === 'desktop' ? '' : deviceMode);

      overlay.classList.add('active');
      loader.style.display = 'block';
      loaderText.innerText = `Preparing Design ${id} (${deviceMode.toUpperCase()} VIEW)...`;
      iframe.src = 'about:blank';

      try {
        await fetch(`/api/start/${id}`, { method: 'POST' });
      } catch (e) {}

      setTimeout(() => {
        iframe.src = `http://localhost:${port}`;
        loader.style.display = 'none';
        checkAllStatus();
      }, 1500);
    }

    function switchViewerDesign(id) {
      const design = DESIGNS[id];
      if (design) {
        openEmbeddedViewer(id, design.port);
      }
    }

    function setDeviceMode(mode, btn) {
      const wrapper = document.getElementById('iframe-wrapper');
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      wrapper.className = 'viewer-iframe-wrapper ' + (mode === 'desktop' ? '' : mode);
    }

    function openCurrentInNewTab() {
      const select = document.getElementById('viewer-design-select');
      const id = select.value;
      const design = DESIGNS[id];
      if (design) {
        window.open(`http://localhost:${design.port}`, '_blank');
      }
    }

    function closeViewer() {
      document.getElementById('viewer-overlay').classList.remove('active');
      document.getElementById('viewer-iframe').src = 'about:blank';
    }

    function filterCards(category, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Auto-check status when loaded
    window.addEventListener('DOMContentLoaded', () => {
      checkAllStatus();
      setInterval(checkAllStatus, 6000);
    });
  </script>
</body>
</html>
"""

import json

@app.route("/")
def index():
    return render_template_string(
        HUB_HTML_TEMPLATE,
        designs=DESIGNS,
        designs_json=json.dumps(DESIGNS)
    )

@app.route("/api/status")
def api_status():
    status = {}
    for did, d in DESIGNS.items():
        status[did] = {
            "id": did,
            "port": d["port"],
            "online": is_port_open(d["port"])
        }
    return jsonify(status)

@app.route("/api/start/<int:design_id>", methods=["GET", "POST"])
def api_start_design(design_id):
    success, msg = start_design_process(design_id)
    return jsonify({"success": success, "message": msg, "port": DESIGNS.get(design_id, {}).get("port")})

@app.route("/api/start-all", methods=["POST"])
def api_start_all():
    threads = []
    for did in DESIGNS:
        t = threading.Thread(target=start_design_process, args=(did,))
        t.start()
        threads.append(t)
    return jsonify({"success": True, "message": "All 10 design background processes launched!"})

@app.route("/api/stop/<int:design_id>", methods=["POST"])
def api_stop_design(design_id):
    success, msg = stop_design_process(design_id)
    return jsonify({"success": success, "message": msg})

@app.route("/design/<int:design_id>")
def redirect_design(design_id):
    if design_id in DESIGNS:
        start_design_process(design_id)
        return redirect(f"http://localhost:{DESIGNS[design_id]['port']}")
    return redirect("/")

def open_browser_delayed(url):
    time.sleep(1.2)
    webbrowser.open(url)

if __name__ == "__main__":
    port = 5000
    hub_url = f"http://localhost:{port}"
    print("=" * 60)
    print(" 🚀 NEX AV - UNIFIED DESIGN HUB")
    print(f" 🌐 Master Hub Address: {hub_url}")
    print("=" * 60)
    
    # Auto open browser
    threading.Thread(target=open_browser_delayed, args=(hub_url,), daemon=True).start()
    
    try:
        app.run(host="0.0.0.0", port=port, debug=False)
    except KeyboardInterrupt:
        print("\nShutting down NEX AV Hub...")
