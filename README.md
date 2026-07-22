# 🧪 Desafio Técnico - Automação de Testes (UI & API) com Cypress

Este repositório contém a suíte de testes automatizados para a aplicação [Automation Exercise](https://automationexercise.com/), cobrindo cenários de ponta a ponta (E2E) para interface de usuário (UI) e validações de rotas de API.

---

## 📁 Estrutura do Projeto

```text
DESAFIO TÉCNICO/
├── cypress/
│   ├── e2e/
│   │   ├── API/
│   │   │   └── 01_apiProducts.cy.js    # Testes de integração de API
│   │   └── UI/
│   │       ├── 01_Login.cy.js          # Testes de fluxo de Login e Cadastro
│   │       └── 02_BuyItem.cy.js        # Testes de Busca de Produtos e Carrinho
│   ├── fixtures/
│   │   └── example.json
│   └── support/
├── cypress.config.js                    # Configurações do Cypress
├── package.json                         # Dependências e scripts do projeto
└── README.md                            # Documentação do projeto
```



# nteúdo do `README.md`

```markdown
# 🧪 Desafio Técnico - Automação de Testes (UI & API) com Cypress

Este repositório contém a suíte de testes automatizados para a aplicação [Automation Exercise](https://automationexercise.com/), cobrindo cenários de ponta a ponta (E2E) para interface de usuário (UI) e validações de rotas de API.

---

## 📁 Estrutura do Projeto

```text
DESAFIO TÉCNICO/
├── cypress/
│   ├── e2e/
│   │   ├── API/
│   │   │   └── 01_apiProducts.cy.js    # Testes de integração de API
│   │   └── UI/
│   │       ├── 01_Login.cy.js          # Testes de fluxo de Login e Cadastro
│   │       └── 02_BuyItem.cy.js        # Testes de Busca de Produtos e Carrinho
│   ├── fixtures/
│   │   └── example.json
│   └── support/
├── cypress.config.js                    # Configurações do Cypress
├── package.json                         # Dependências e scripts do projeto
└── README.md                            # Documentação do projeto
```

---

## 🛠️ 1. Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão LTS recomendada, v18 ou superior)
* [Git](https://git-scm.com/)
* Gerenciador de pacotes `npm` (instalado junto com o Node.js)

---

## 📦 2. Instruções de Instalação

1. **Clone este repositório:**

```bash
git clone git@github.com:MatheusVictor01/Desafio_tecnico-ASC.git
```

2. **Navegue até a pasta do projeto:**

```bash
cd DESAFIO-TECNICO
```

3. **Instale as dependências do projeto:**

```bash
npm install
```

---

## 🚀 3. Comandos para Executar os Testes

Você pode rodar os testes no modo **Interativo** (com a interface do Cypress) ou no modo **Headless** (em linha de comando):

### Modo Interativo (Interface Gráfica)

Abre o Test Runner do Cypress para acompanhar a execução visualmente:

```bash
npm run cypress:open
```

*Ou usando o npx:* `npx cypress open`

### Modo Headless (Linha de Comando)

Executa todos os testes em segundo plano e gera o resumo no terminal:

```bash
npm run cypress:run
```

*Ou usando o npx:* `npx cypress run`

---

## 📋 4. Informações e Reprodução dos Cenários

Os cenários foram organizados entre testes de Interface (UI) e testes de API.

### 🌐 Testes de Interface (UI)

* **`01_Login.cy.js`**:
* Cadastro de novo usuário preenchendo o formulário completo.
* Autenticação/Login com credenciais válidas.
* Validação de mensagem de erro ao informar senha inválida.
* **`02_BuyItem.cy.js`**:
* Pesquisa por produto existente no catálogo.
* Adição de item pesquisado ao carrinho de compras e validação da presença do produto no carrinho.

### 🔌 Testes de API

* **`01_apiProducts.cy.js`**:
* **GET** `/api/productsList`: Valida código HTTP 200, estrutura de resposta em array e propriedades obrigatórias do produto (`name`, `price`).
* **GET** `/api/brandsList`: Valida código HTTP 200, array de marcas e integridade do campo `brand`.
* **POST** `/api/searchProduct`: Valida retorno do código de erro esperado (`responseCode: 400`) ao realizar requisição sem parâmetros obrigatórios.
