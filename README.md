# 🎮 View Viewers

[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://view-viewers.vercel.app)
[![Made with React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-API-blue?logo=axios)](https://axios-http.com/)

## 📌 Sobre o projeto
O **View Viewers** é uma aplicação web que consome a **API da Twitch** para exibir informações visualizações em live.  
O projeto foi desenvolvido como forma de **praticar consumo de APIs, roteamento no front-end, uso de React + TypeScript e deploy de projetos funcionais**.

🔹 Este projeto passou por **3 versões de evolução**:
1. **JavaScript Vanilla** – contato com consumo da API e estilização da interface. [Acesse o repositório clicando aqui](https://github.com/jlucassaldanha/viewers-view)  
2. **React (JavaScript)** – reestruturação para componentização e melhor escalabilidade. [Acesse o repositório clicando aqui](https://github.com/jlucassaldanha/react-viewers-view)
3. **React + TypeScript (deploy na Vercel)** – versão atual, com tipagem, organização de pastas, melhorias de performance e funcionalidades reformuladas. [Acesse o repositório clicando aqui](https://github.com/jlucassaldanha/viewers-view-react-ts) 

## 🛠 Tecnologias Utilizadas
- **Front-end:** React, TypeScript, Vite 
- **Roteamento:** react-router-dom
- **Consumo de API:** Axios
- **Deploy:** Vercel

## 🎯 Funcionalidades
- Exibção de visualizações de canal da Twitch em tempo real
- Exclusão de usuários especificos da visualização
- Interface responsiva e estrutura modular e escalável

## 🖼️ Preview
![Screenshot da tela de conexão](./preview-1.png)
![Screenshot da tela de visualização](./preview-2.png)

## 🔧 Como rodar localmente
```bash
# Clonar o repositório
git clone https://github.com/jlucassaldanha/view-viewers.git

# Acessar pasta
cd view-viewers

# Instalar dependências
npm install

# Rodar projeto
npm run dev

# Abra http://localhost:5173 no seu navegador
```

### Rodar localmente com aplicativo próprio da twitch

- Acesse o [console da Twitch](https://dev.twitch.tv/console/apps) e faça login
- Registre seu aplicativo 
- Configure as URLs de redirecionamento OAuth para a sua URL seguindo o modelo: **https://sua_url/viewers**
- Categoria: **Analytics Tool**
- Tipo de cliente: **Confidencial**
- Copie seu **ID do cliente**
- Salve o aplicativo

Acesse o arquivo da página de conexão:
``` shell
src
└── pages
    └── ConnectMainPage.tsx
``` 

No arquivo mude `client_id` e `redirect_uri`:
```TypeScript
function ConnectMainPage() {
// ... Código anterior
	const client_id: string = "Seu ID do cliente"    
    const redirect_uri: string = "Sua url (sem o trecho '/viewers')"
// Restante do código ...
}
```

## 🔧 Próximos passos / melhorias planejadas

- Adição de autenticação Twitch OAuth
- Banco de dados para armazenamento de configurações

## 🌍 Deploy
[👉 Acesse o projeto online](https://view-viewers.vercel.app)

## 📫 Contato
- [GitHub: jlucassaldanha](https://github.com/jlucassaldanha)
- [LinkedIn: João Lucas Saldanha](https://www.linkedin.com/in/joao-lucas-saldanha/)
