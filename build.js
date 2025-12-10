const fs = require('fs');
const path = require('path');

// Copia el SVG a dist
const srcSvg = path.join(__dirname, 'nodes/WhatsApp/WhatsappMessage.svg');
const destSvg = path.join(__dirname, 'dist/nodes/WhatsApp/WhatsappMessage.svg');

// Crea la carpeta si no existe
const destDir = path.dirname(destSvg);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copia el archivo
if (fs.existsSync(srcSvg)) {
  fs.copyFileSync(srcSvg, destSvg);
  console.log('SVG copiado correctamente');
}