# Image & PDF Toolkit

## Run
Because ES modules and browser security work better over HTTP, run a local server from this folder:

## Features
1. Image dimensions — pixels/cm
2. Image size targeting — approximate KB
3. Image resolution — DPI metadata for JPEG; PNG export is pixel-preserving
4. Background removal — IMG.LY browser model via jsDelivr
5. JPG/JPEG/PNG conversion
6. PDF structural optimization — pdf-lib
7. PDF to PNG/JPG — PDF.js
8. Images to PDF — pdf-lib

## Notes
- All normal image/PDF processing is client-side.
- Background removal downloads a machine-learning model the first time.
- Exact image file sizes cannot always be achieved because formats have encoding constraints.
- A generic PDF cannot reliably be made smaller without analyzing/recompressing its internal objects. The included PDF optimizer performs safe structural optimization. For image-heavy PDFs, rasterizing/rebuilding is the usual next step.
- For production, pin and self-host third-party libraries/models, add CSP headers, and add server-side fallbacks if you need deterministic PDF compression.
