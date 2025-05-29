# 📝 Blog Firebase React
## Um projeto de blog moderno construído com React + Vite, utilizando Firebase como backend e banco de dados. O sistema permite autenticação de usuários, criação de posts com tags e imagens, e uma interface fluida com foco em desempenho, organização e escalabilidade.

# 🚀 Funcionalidades
🔐 Autenticação de usuários (login/cadastro com Firebase Authentication)

📝 Criação, edição e exclusão de posts

🏷️ Adição de tags aos posts

🖼️ Upload e exibição de imagens

📌 Filtro de posts por tags

📡 Integração com APIs (consumo externo, se necessário)

🔄 Gerenciamento de estado com Context API + Providers

🧠 Uso de Hooks personalizados

📍 Navegação com React Router

⚠️ Tratamento de leak de memória

🪝 Componentização e arquitetura de código limpa e reativa

🛠️ Tecnologias Utilizadas
React (com Vite)

Firebase (Authentication, Firestore, Storage)

React Router DOM

React Context API

Custom Hooks

TailwindCSS (se utilizado)

# 📂 Estrutura de Pastas
css
Copiar
Editar
src/
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
├── main.jsx
🔧 Como Rodar Localmente
bash
Copiar
Editar
#3 Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

#3 Instale as dependências
npm install

## Rode o projeto
npm run dev

## 💡 Você precisa criar um arquivo .env com suas credenciais do Firebase para o backend:

# 🔒 Segurança
Tokens e dados sensíveis são protegidos via Firebase Auth.

Regras de segurança configuradas no Firebase Firestore e Storage.

Upload de arquivos controlado e limitado por tipo e tamanho.

⚠️ Cuidados Adotados
🧼 Prevenção de vazamento de memória em componentes desmontados

✅ Validação de formulários

⛔ Feedback visual para erros de autenticação ou envio

🌀 Carregamento assíncrono com loading states

🪵 Logs e mensagens para debugging em dev mode


✨ Futuras Melhorias
Comentários nos posts 

melhor tratamento de mensagens com toast por exemplo, 

criação do campo curtida, 

Perfil de usuário

Internacionalização(mudar idioma do app)

Responsividade aprimorada

# 🧠 Aprendizados
Esse projeto me permitiu explorar:

A estruturação de uma aplicação React escalável

A integração completa com serviços do Firebase

O uso avançado de Context API e Hooks

Boas práticas com gerenciamento de memória e recursos assíncronos
