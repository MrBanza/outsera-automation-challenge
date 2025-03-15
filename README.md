# Projeto de Testes Automatizados (E2E, API, Mobile e Performance)

Este projeto contém testes **End-to-End (E2E)** para **Web e Mobile**, testes de **API** e **testes de carga** com **K6**. O objetivo é validar a funcionalidade e a performance da aplicação.

## 📌 Tecnologias Utilizadas
- **Cypress**: Para automação de testes Web.
- **Appium**: Para automação de testes Mobile.
- **Cucumber**: Para escrita de testes em Gherkin.
- **Page Object Model (POM)**: Para organização dos elementos e interações.
- **Supertest**: Para automação de testes de API.
- **K6**: Para execução de testes de carga.
- **JavaScript/Node.js**: Para desenvolvimento dos testes.

## 📂 Estrutura do Projeto
```
├── cypress/
│   ├── e2e/                  # Diretório dos testes E2E (Web)
│   │   ├── features/         # Testes escritos em Gherkin
│   │   ├── pages/            # Implementação do Page Object Model
│   ├── support/              # Arquivos de suporte ao Cypress
│   ├── cypress.config.js     # Configuração principal do Cypress
│
├── mobile/
│   ├── tests/                # Diretório dos testes Mobile
│   ├── capabilities/         # Configurações do Appium
│   ├── appium.config.js      # Configuração principal do Appium
│
├── api/
│   ├── tests/                # Diretório dos testes de API
│   ├── api.test.js           # Testes automatizados com Supertest
│
├── k6/
│   ├── loadtests/            # Diretório dos testes de carga
│   │   ├── loadtest.js       # Script principal do K6
│
├── README.md                 # Documentação do projeto
```

## 🖥️ Testes E2E (Web)
Os testes seguem a abordagem **BDD (Behavior-Driven Development)** utilizando Gherkin.

### 🔹 Como Executar os Testes E2E (Web)
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes:
   ```sh
   npx cypress run
   ```

## 📱 Testes Mobile
Os testes são escritos utilizando **Appium**.

### 🔹 Como Executar os Testes Mobile
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor do Appium:
   ```sh
   appium
   ```
3. Execute os testes:
   ```sh
   npx wdio run mobile/appium.config.js
   ```

## 🔄 Testes de API
Os testes de API utilizam **Supertest** para validar os endpoints.

### 🔹 Como Executar os Testes de API
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes de API:
   ```sh
   npm test
   ```

## 🚀 Testes de Carga
Os testes de carga com **K6** ajudam a avaliar a performance da aplicação.

### 🔹 Como Executar os Testes de Carga
1. Instale o K6:
   ```sh
   brew install k6  # Para macOS
   sudo apt install k6  # Para Linux
   ```
2. Execute o teste de carga:
   ```sh
   k6 run k6/loadtests/loadtest.js
   ```

## 📌 Melhorias Futuras
✅ Adicionar mais cenários de testes Web, Mobile e API.  
✅ Implementar relatórios automatizados.  
✅ Integrar os testes em pipelines CI/CD.  

---
🔹 **Desenvolvido para garantir qualidade e performance da aplicação!** 🚀
