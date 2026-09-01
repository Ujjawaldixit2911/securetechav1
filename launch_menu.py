"""
NEX AV - Interactive Terminal & Web Launcher
Asks the user which design to open and launches it instantly.
"""

import os
import sys
import time
import socket
import subprocess
import webbrowser

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DESIGNS = {
    1: {"name": "Design 1 (Cyberpunk Neon)", "port": 5001, "folder": "design_one", "cmd": [sys.executable, "app.py"]},
    2: {"name": "Design 2 (Minimalist Precision)", "port": 5002, "folder": "design_two", "cmd": [sys.executable, "app.py"]},
    3: {"name": "Design 3 (Bento Grid Modern)", "port": 5003, "folder": "design_three", "cmd": [sys.executable, "app.py"]},
    4: {"name": "Design 4 (3D Spatial Switcher)", "port": 5004, "folder": "design_four", "cmd": [sys.executable, "app.py"]},
    5: {"name": "Design 5 (Corporate Tech React)", "port": 5005, "folder": "design_five", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
    6: {"name": "Design 6 (Ultra Premium Glass)", "port": 5006, "folder": "design_six", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
    7: {"name": "Design 7 (Executive Light Studio)", "port": 5007, "folder": "design_seven", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
    8: {"name": "Design 8 (Deep Navy & Teal React)", "port": 5008, "folder": "design_eight", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
    9: {"name": "Design 9 (Electric Cyan & Boardroom)", "port": 5009, "folder": "design_nine", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
    10: {"name": "Design 10 (Cinematic Royal Blue)", "port": 5010, "folder": "design_ten", "cmd": ["npm.cmd" if os.name == 'nt' else "npm", "run", "dev"]},
}

def is_port_open(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.6)
        return s.connect_ex(('127.0.0.1', port)) == 0

def launch_design(choice_id):
    if choice_id not in DESIGNS:
        print("❌ Invalid selection.")
        return
    
    d = DESIGNS[choice_id]
    port = d["port"]
    folder = os.path.join(BASE_DIR, d["folder"])
    url = f"http://localhost:{port}"
    
    print(f"\n🚀 Launching {d['name']}...")
    
    if not is_port_open(port):
        print(f"⏳ Starting server in {d['folder']} on port {port}...")
        if os.name == 'nt':
            cmd_str = f"cd /d \"{folder}\" && {' '.join(d['cmd'])}"
            subprocess.Popen(f'start "{d["name"]}" cmd /k "{cmd_str}"', shell=True)
        else:
            subprocess.Popen(d['cmd'], cwd=folder)
            
        print("⏳ Waiting for server to initialize...")
        for _ in range(15):
            time.sleep(0.5)
            if is_port_open(port):
                break
    else:
        print(f"✅ Server is already running on port {port}!")
        
    print(f"🌐 Opening {url} in your browser...")
    webbrowser.open(url)
    print("\n✨ Done! You can close this window anytime.")

def launch_hub():
    print("\n🌐 Starting Unified Web Hub on http://localhost:5000...")
    hub_script = os.path.join(BASE_DIR, "hub_server.py")
    if os.name == 'nt':
        subprocess.Popen(f'start "NEX AV Hub" cmd /k "cd /d \"{BASE_DIR}\" && python \"{hub_script}\""', shell=True)
    else:
        subprocess.Popen([sys.executable, hub_script], cwd=BASE_DIR)
    
    time.sleep(1.5)
    webbrowser.open("http://localhost:5000")

def launch_all():
    print("\n⚡ Starting ALL 10 design servers...")
    for id_num in sorted(DESIGNS.keys()):
        d = DESIGNS[id_num]
        folder = os.path.join(BASE_DIR, d["folder"])
        if not is_port_open(d["port"]):
            print(f" -> Starting {d['name']} on Port {d['port']}...")
            if os.name == 'nt':
                cmd_str = f"cd /d \"{folder}\" && {' '.join(d['cmd'])}"
                subprocess.Popen(f'start "{d["name"]}" cmd /k "{cmd_str}"', shell=True)
    
    launch_hub()

def main():
    print("\n" + "=" * 65)
    print("        🏢 NEX AV - INTERACTIVE DESIGN SELECTOR")
    print("=" * 65)
    print(" Konsi design dekhni hai? Choose a number below:\n")
    for k, v in DESIGNS.items():
        print(f"   [{k:2d}]  {v['name']:<35} -> http://localhost:{v['port']}")
    print("-" * 65)
    print("   [ H]  Open Interactive Web Hub UI (http://localhost:5000)")
    print("   [ A]  Start ALL 10 Designs & Open Web Hub")
    print("=" * 65)
    
    choice = input("\nEnter your choice (1-10, H, A) [Default: H]: ").strip().upper()
    
    if not choice or choice == 'H':
        launch_hub()
    elif choice == 'A':
        launch_all()
    else:
        try:
            num = int(choice)
            if num in DESIGNS:
                launch_design(num)
            else:
                print("❌ Invalid number. Opening Web Hub instead...")
                launch_hub()
        except ValueError:
            print("❌ Invalid input. Opening Web Hub instead...")
            launch_hub()

if __name__ == "__main__":
    main()
