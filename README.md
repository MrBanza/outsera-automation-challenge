# 🚀 **Projeto de Automação de Testes**

Este projeto contém testes automatizados para **web, API, mobile e carga** utilizando as seguintes tecnologias:

🔹 **Cypress** → Testes E2E para aplicações web
<br>🔹 **Appium** → Testes para aplicativos mobile
<br>🔹 **K6** → Testes de carga e desempenho
<br>🔹 **Supertest** → Testes de API

---

## 📦 **Dependências**

Antes de começar, instale as dependências necessárias:

```sh
npm install
```

### 🔧 **Configuração**

1. **Instalar o Node.js** (recomendado: versão 18+)
2. **Instalar Appium** para testes mobile:
   ```sh
   npm install -g appium
   appium driver install uiautomator2
   ```
3. **Instalar dependências do K6**:
   ```sh
   brew install k6  # Para macOS
   choco install k6  # Para Windows (usando Chocolatey)
   ```

---

## 🚀 **Como Executar os Testes**

### 🖥️ **Testes E2E (Cypress)**

Para rodar os testes web:
```sh
npx cypress open
```
Ou para execução em modo headless:
```sh
npx cypress run
```

### 🌐 **Testes de API (Supertest)**

Para executar os testes de API:
```sh
npm test
```

### 📱 **Testes Mobile (Appium)**

1. Inicie o servidor Appium:
   ```sh
   appium
   ```
2. Execute os testes:
   ```sh
   npm run test:mobile
   ```

📌 **Nota:** Atualmente, os testes mobile podem ser aprimorados com a adição de suporte para múltiplas plataformas e melhor estabilidade em execuções contínuas. 🚀

### ⚡ **Testes de Carga (K6)**

Para executar os testes de carga:
```sh
k6 run tests/load_test.js
```

---

## 📁 **Estrutura do Projeto**

```
📂 projeto-automacao
 ├── 📁 cypress
 │   ├── 📁 e2e
 │   │   ├── 📄 login.feature
 │   │   ├── 📄 checkout.feature
 │   ├── 📁 step_definitions
 │   │   ├── 📄 login.js
 │   │   ├── 📄 checkout.js
 ├── 📁 tests
 │   ├── 📄 api_test.js
 │   ├── 📄 load_test.js
 ├── 📁 mobile
 │   ├── 📄 mobile_test.js
 ├── 📄 README.md
 ├── 📄 package.json
```

---

## 🔄 **CI/CD**

Este projeto pode ser integrado ao **GitHub Actions** ou **Jenkins** para execução contínua dos testes.

---

## 🤝 **Contribuições**

1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b minha-feature`)
3. Faça suas alterações e commit (`git commit -m 'Minha nova feature'`)
4. Envie as alterações (`git push origin minha-feature`)
5. Abra um Pull Request

---

### 💡 **Dúvidas?**
Se precisar de ajuda, entre em contato!

🚀 **Bons testes!**