@echo off
title SecureTech AV - Multi Design Runner
echo ==========================================
echo  STARTING ALL 3 HOME PAGE DESIGNS...
echo ==========================================

echo Starting Design 1 (Port 5001)...
start "Design One (Port 5001)" cmd /k "cd design_one && python app.py"

echo Starting Design 2 (Port 5002)...
start "Design Two (Port 5002)" cmd /k "cd design_two && python app.py"

echo Starting Design 3 (Port 5003)...
start "Design Three (Port 5003)" cmd /k "cd design_three && python app.py"

echo Starting Design 4 (Port 5004)...
start "Design Four (Port 5004)" cmd /k "cd design_four && python app.py"

echo Starting Design 5 (Port 5005 - React)...
start "Design Five (Port 5005 - React)" cmd /k "cd design_five && npm run dev"

echo Starting Design 6 (Port 5006 - Premium Vanilla)...
start "Design Six (Port 5006)" cmd /k "cd design_six && npm run dev"

echo Starting Design 7 (Port 5007 - React)...
start "Design Seven (Port 5007 - React)" cmd /k "cd design_seven && npm run dev"

echo Starting Design 8 (Port 5008 - React)...
start "Design Eight (Port 5008 - React)" cmd /k "cd design_eight && npm run dev"

echo Starting Design 9 (Port 5009 - React)...
start "Design Nine (Port 5009 - React)" cmd /k "cd design_nine && npm run dev"

echo.
echo ==========================================
echo  ALL SERVERS INITIALIZED!
echo  Please open these links in your browser:
echo  1. Design One (Cyberpunk): http://localhost:5001
echo  2. Design Two (Minimalist): http://localhost:5002
echo  3. Design Three (Bento): http://localhost:5003
echo  4. Design Four (3D Switcher): http://localhost:5004
echo  5. Design Five (Corporate React): http://localhost:5005
echo  6. Design Six (Premium Vanilla): http://localhost:5006
echo  7. Design Seven (Corporate Light): http://localhost:5007
echo  8. Design Eight (Premium Navy/Teal): http://localhost:5008
echo  9. Design Nine (Premium Cyan/Navy): http://localhost:5009
echo ==========================================
echo.
pause
