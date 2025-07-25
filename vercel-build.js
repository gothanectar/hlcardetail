const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Função para executar comandos com tratamento de erro
function runCommand(command, description) {
  console.log(`\n${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`${description} concluído com sucesso!`);
    return true;
  } catch (error) {
    console.error(`Erro ao ${description.toLowerCase()}:`, error);
    process.exit(1);
  }
}

// Garante que o diretório de saída existe
const outputDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(outputDir)) {
  console.log('Criando diretório de saída...');
  fs.mkdirSync(outputDir, { recursive: true });
}

// Executa os comandos de build
runCommand('npm install', 'Instalando dependências');

// Executa o script de cópia de imagens
runCommand('node scripts/copy-images.js', 'Copiando imagens');

// Executa o build do Vite
runCommand('npm run build', 'Executando o build de produção');

// Cria um arquivo de configuração para a Vercel
const vercelOutput = {
  version: 2,
  build: {
    env: {
      NODE_ENV: 'production'
    }
  },
  routes: [
    { "handle": 'filesystem' },
    { "src": '/.*', "dest": '/index.html' }
  ]
};

// Garante que o diretório de saída da Vercel existe
const vercelOutputDir = path.join(process.cwd(), '.vercel_build_output');
if (!fs.existsSync(vercelOutputDir)) {
  fs.mkdirSync(vercelOutputDir, { recursive: true });
}

// Escreve o arquivo de configuração
fs.writeFileSync(
  path.join(vercelOutputDir, 'config.json'),
  JSON.stringify(vercelOutput, null, 2)
);

console.log('\nBuild concluído com sucesso!');
