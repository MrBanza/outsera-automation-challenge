# Projeto de Testes Automatizados

Este repositório contém testes automatizados para web, API, mobile e carga, utilizando Cypress, Appium, Supertest e K6. Os testes incluem cenários E2E, testes de API, testes de carga e testes mobile.

## Tecnologias Utilizadas
- **Cypress**: Testes E2E web
- **Appium**: Testes automatizados para aplicativos móveis
- **Supertest**: Testes automatizados de API
- **K6**: Testes de carga
- **GitHub Actions**: Integração Contínua (CI/CD)

---
## Estrutura do Projeto

```
|-- cypress/               # Testes E2E Web (Cypress + Cucumber)
|   |-- e2e/
|       |-- features/      # Arquivos de teste em Gherkin
|   |-- support/
|       |-- pageObjects/   # Implementação do Page Object Pattern
|
|-- api/                   # Testes de API (Supertest)
|   |-- tests/             # Arquivos de teste de API
|
|-- mobile/                # Testes Mobile (Appium)
|   |-- tests/             # Scripts de teste
|
|-- k6/                    # Testes de Carga (K6)
|   |-- loadtests/         # Scripts de carga
|
|-- .github/workflows/     # Configuração do pipeline CI/CD
|-- README.md              # Documentação do projeto
```

---
## Como Executar os Testes

### 1️⃣ Testes E2E Web (Cypress + Cucumber)
```sh
npx cypress open  # Executa os testes no modo interativo
npx cypress run   # Executa os testes em modo headless
```

### 2️⃣ Testes Automatizados de API (Supertest)
```sh
npm test  # Executa todos os testes de API
```

### 3️⃣ Testes Mobile (Appium)
```sh
appium --base-path /wd/hub &   # Iniciar o servidor Appium
npm run test:mobile            # Executar os testes
```

### 4️⃣ Testes de Carga (K6)
```sh
k6 run k6/loadtests/loadtest.js  # Executa o teste de carga
```

---
## Relatórios
Os relatórios são gerados automaticamente após a execução dos testes e podem ser encontrados em:
```
|-- reports/
|   |-- e2e/        # Relatórios de testes E2E
|   |-- api/        # Relatórios de testes de API
|   |-- mobile/     # Relatórios de testes Mobile
|   |-- performance/ # Relatórios de testes de carga
```

---
## CI/CD (GitHub Actions)

O pipeline executa automaticamente os testes após cada commit. Configuração no arquivo `.github/workflows/ci.yml`.

---
## Melhorias Futuras
- Adicionar mais testes E2E e API
- Melhorar a cobertura de testes Mobile
- Refinar os testes de carga
- Implementar paralelismo nos testes para execução mais rápida

