const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Garante que o diretório de saída existe
const outputDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Executa o build
console.log('Instalando dependências...');
execSync('npm install', { stdio: 'inherit' });

console.log('Executando o build...');
execSync('npm run build', { stdio: 'inherit' });

// Cria um arquivo de configuração para a Vercel
const vercelOutput = {
  version: 2,
  build: {
    env: {
      NODE_ENV: 'production'
    }
  }
};

fs.writeFileSync(
  path.join(process.cwd(), '.vercel_build_output', 'config.json'),
  JSON.stringify(vercelOutput, null, 2)
);

console.log('Build concluído com sucesso!');
