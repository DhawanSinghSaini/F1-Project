# 🏎️ F1 APEX Analytics Capstone

A full-stack, machine-learning-powered telemetry visualization engine for Formula 1 data.

![F1 Apex UI Preview](https://upload.wikimedia.org/wikipedia/commons/3/33/F1_logo.svg)

## 📖 Overview
F1 APEX Analytics bridges the gap between Python's powerful data-science capabilities (`FastF1`, `Scikit-Learn`, `SciPy`) and the high-performance modern web (`React`, `Plotly`, `Node.js`). 

It ingests raw telemetry data (Speed, Throttle, Brake, X/Y/Z Coordinates) via FastF1, mathematically aligns two drivers using **Dynamic Time Warping (DTW)**, interpolates their positions to a normalized 1-meter spatial baseline, and feeds the stream into an Unsupervised Machine Learning Pipeline (**Isolation Forest**) to automatically detect racing anomalies (Lock-ups, Snaps, Traction Loss).

The processed data is cached natively in **MongoDB BSON**, compressed via GZIP, and rendered natively in the browser via high-performance Canvas charts and SVG 2D track maps.

## ✨ Key Features
* **Polyglot Execution**: Node.js backend executing stateful Python child-processes.
* **Spatial Alignment**: Distance-based telemetry matching using `fastdtw`.
* **ML Anomaly Detection**: `scikit-learn` Isolation Forest trained to detect multi-dimensional control errors.
* **Synchronized Scrubbing**: `Plotly.js` hovering mapped locally to React state to synchronize an interactive 2D SVG Circuit Map.
* **High Performance**: `compression` middleware and `React.memo` optimization drops payload sizes and UI render lag to near-zero.

## 🚀 Quick Start
### 1. Prerequisites
- **Node.js** (v18+)
- **Python** (3.9+) with `pip`
- **MongoDB** running locally on port `27017`

### 2. Installation
Install backend dependencies:
```bash
cd backend
npm install
pip install -r requirements.txt
```

Install frontend dependencies:
```bash
cd frontend
npm install
```

### 3. Launching
We provide an automated Orchestration Script for Windows. Simply double-click:
**`start_apex.bat`** 
This will automatically launch the backend server, the frontend Vite client, and open a browser window!

## 📊 Running a Performance Audit
You can verify the backend's compression efficiency and caching speeds by running the built-in audit script:
```bash
node audit.js
```

## 🛠️ Architecture Stack
- **Frontend**: React (Vite), Lucide Icons, Plotly.js Canvas, Custom SVG
- **Backend**: Express.js, Mongoose, Axios
- **Database**: MongoDB Local
- **Engine**: Python, Pandas, FastF1, Scikit-Learn, SciPy

---
*Created as a Full-Stack Engineering Capstone Project.*
