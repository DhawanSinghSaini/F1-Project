@echo off
title APEX Analytics - Environment Orchestrator
color 0b

echo ==============================================================
echo        🏎️  F1 APEX ANALYTICS - STARTUP SEQUENCE 🏎️
echo ==============================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    pause
    exit /b
)

:: Check for Python
where python >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Python is not installed or not in PATH!
    pause
    exit /b
)

echo [1/3] Starting Express Backend Server...
start "APEX Backend" cmd /c "cd backend && npm run dev"

timeout /t 3 /nobreak >nul

echo [2/3] Starting React UI Client...
start "APEX Frontend" cmd /c "cd frontend && npm run dev"

timeout /t 2 /nobreak >nul

echo [3/3] System is launching! Opening browser...
start http://localhost:3000

echo.
echo ==============================================================
echo ✅ All systems GO! Close this window to keep servers running in background terminals.
echo ==============================================================
pause
