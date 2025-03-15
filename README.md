# Automação de Testes - Outsera Automation Challenge

## Introdução
Este repositório contém testes automatizados para um aplicativo mobile, além de testes de performance utilizando K6.

## Pré-requisitos
Antes de executar os testes, certifique-se de ter instalado:
- Node.js e npm
- Appium (para testes mobile)
- K6 (para testes de performance)
- Dependências do projeto (execute `npm install` na raiz do projeto)

## Como Executar os Testes

### Testes Mobile
1. Conecte um dispositivo Android ou inicie um emulador.
2. Execute os testes com o comando:
   ```sh
   npm run test:mobile
   ```

### Testes de Performance (K6)
1. Certifique-se de que o K6 está instalado.
2. Para rodar o teste de performance:
   ```sh
   run_k6_tests.bat (Windows)
   ./run_k6_tests.sh (Linux/Mac)
   ```
3. O relatório HTML será gerado automaticamente na pasta `reports/`.

### Arquivos Importantes
- `run_k6_tests.sh`: Script para rodar os testes de performance no Linux/Mac.
- `run_k6_tests.bat`: Script para rodar os testes de performance no Windows.
- `reports/result.html`: Relatório formatado de performance gerado automaticamente.

## Relatórios de Teste
- Os relatórios de testes mobile são gerados automaticamente.
- Os testes de performance geram arquivos JSON e HTML em `reports/` para análise.

Caso encontre problemas, verifique as dependências ou entre em contato para suporte.