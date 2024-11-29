
# Aplicação Gamificada de Ensino de Finanças para Crianças

Este projeto é uma aplicação gamificada destinada ao ensino de finanças pessoais para crianças de 4 a 8 anos. Através de uma interface interativa e divertida, as crianças aprendem conceitos básicos sobre dinheiro, orçamento, economia e muito mais.

-Jogos Educativos: Jogos interativos que ensinam conceitos de finanças, como poupança, gastos e doações.

-Sistema de Recompensas: As crianças podem ganhar pontos e recompensas virtuais à medida que completam desafios financeiros.

-Acompanhamento de Progresso: Professores e pais podem acompanhar o progresso das crianças, com relatórios de atividades e desempenho.

-Interface Amigável: Interface simples, colorida e interativa, projetada para ser intuitiva para crianças pequenas.
## Stack utilizada

**Front-end:** React.js.
**Back-end:** Node, Express.
**Banco de Dados:** MySQL.



## Pré-requisitos

**Node.js** (versão 14 ou superior)
**MySQL** (ou qualquer serviço de banco de dados MySQL em execução)
**npm** (Node Package Manager) ou yarn




1. Clone o Repositório:
```bash
git clone https://github.com/IanIori/aplica-o-gamificada.git
cd aplica-o-gamificada
```

2. Instale as dependências:

```bash
npm install
```

3. Configuração do Banco de Dados:

No MySQL, crie um banco de dados e configure as credenciais no arquivo .env:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua-senha
DB_NAME=financas_infantis
```

5. Execute o servidor Backend (Node.js):

```bash
node app.js
```


## Diretórios

```bash
/financas-infantis
│
├── /backend              # Backend da aplicação (Node.js)
│   ├── /models           # Modelos de dados do banco (MySQL)
│   ├── /routes           # Rotas e lógica de negócios
│   ├── /controllers      # Lógica de controle de fluxo
│   └── .env              # Configurações de ambiente
│
└── /frontend             # Frontend da aplicação (React)
    ├── /src              # Código fonte do React
    ├── /components       # Componentes do React
    └── .env              # Configurações de ambiente

```

