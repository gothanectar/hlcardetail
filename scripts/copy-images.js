const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify fs functions
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);

// Caminhos
const sourceDir = path.join(__dirname, '../../IMAGENS');
const destDir = path.join(__dirname, '../public/imagens');

// Função para copiar arquivos de forma recursiva
async function copyDir(src, dest) {
  // Criar diretório de destino se não existir
  await mkdir(dest, { recursive: true });
  
  // Ler o conteúdo do diretório de origem
  const entries = await readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // Se for um diretório, copiar recursivamente
      await copyDir(srcPath, destPath);
    } else {
      // Se for um arquivo, copiar
      await copyFile(srcPath, destPath);
      console.log(`Copiado: ${srcPath} -> ${destPath}`);
    }
  }
}

// Executar a cópia
async function main() {
  try {
    console.log('Iniciando cópia de imagens...');
    
    // Verificar se o diretório de origem existe
    try {
      await stat(sourceDir);
    } catch (err) {
      console.warn(`Aviso: Diretório de origem não encontrado: ${sourceDir}`);
      console.warn('Pulando cópia de imagens.');
      return;
    }
    
    await copyDir(sourceDir, destDir);
    console.log('Imagens copiadas com sucesso!');
  } catch (error) {
    console.error('Erro ao copiar imagens:', error);
    process.exit(1);
  }
}

// Executar o script
main();
