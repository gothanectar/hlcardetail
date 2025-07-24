const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Caminhos
const sourceDir = path.join(__dirname, '../../IMAGENS');
const destDir = path.join(__dirname, '../public/imagens');

// Criar diretório de destino se não existir
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copiar arquivos
try {
  console.log('Copiando imagens...');
  
  // Usar xcopy para copiar os arquivos (Windows)
  execSync(`xcopy "${sourceDir}\\*.*" "${destDir}\\*.*" /Y /I /E`, { stdio: 'inherit' });
  
  console.log('Imagens copiadas com sucesso!');
} catch (error) {
  console.error('Erro ao copiar imagens:', error);
  process.exit(1);
}
