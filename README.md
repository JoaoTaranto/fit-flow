# Fit Flow

## 📌 Sobre o Projeto
O **Fit Flow** é um aplicativo projetado para ajudar usuários a gerenciar seus treinos de forma organizada e eficiente. O app permite criar, salvar e acompanhar "Flows" de treino, facilitando a gestão das rotinas de exercícios.

## 🎯 Funcionalidades
- 🔍 **Pesquisa de Flows**: Campo de busca para encontrar treinos rapidamente.
- 📆 **Treinos do Dia**: Sugestão de treinos programados para o dia atual.
- 📋 **Lista de Flows**: Exibição de Flows ativos e salvos pelo usuário.
- ➕ **Criação de Novo Flow**: Interface para adicionar novos treinos com upload de capa e definição de dificuldade.

## 🛠️ Tecnologias Utilizadas
- **Framework**: Next.js + TypeScript
- **Gerenciamento de Formulários**: React Hook Form
- **Validação**: Zod
- **Upload de Arquivos**: react-dropzone
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Context API

## 📂 Estrutura do Projeto
```
fit-flow/
│── src/
│   ├── app/               # Diretório para rotas e layouts (Next.js App Router)
│   │   ├── layout.tsx     # Layout padrão da aplicação
│   │   ├── page.tsx       # Página inicial (Home)
│   │   ├── flows/         # Páginas relacionadas aos Flows
│   ├── components/        # Componentes reutilizáveis
│   ├── hooks/             # Hooks personalizados
│   ├── context/           # Context API para gerenciamento de estado
│   ├── lib/               # Funções auxiliares e configurações globais
│   ├── assets/            # Imagens e ícones
│── public/                # Arquivos estáticos
│── .env.local             # Variáveis de ambiente
│── next.config.js         # Configurações do Next.js
│── tsconfig.json          # Configuração do TypeScript
│── package.json           # Dependências e scripts do projeto
│── README.md              # Documentação do projeto
```

## 🚀 Como Executar o Projeto
### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/seu-usuario/fit-flow.git
cd fit-flow
```
### 2️⃣ Instalar dependências
```sh
npm install # Ou yarn install
```
### 3️⃣ Iniciar o projeto
```sh
npm run dev # Ou yarn dev
```

## ✅ Roadmap
- [X] Criar estrutura base do projeto
- [ ] Implementar tela Home
- [ ] Criar funcionalidade de busca
- [ ] Adicionar autenticação de usuários
- [ ] Implementar integração com backend

## 🤝 Contribuição
1. Fork o repositório
2. Crie uma branch com sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Minha feature'`)
4. Push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Feito com ❤️ para a comunidade fitness! 💪

