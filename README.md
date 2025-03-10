# Outsera Automation Challenge

## Objetivo
Este projeto tem o objetivo de demonstrar conceitos e formas de utilizar ferramentas de automação de testes para criar testes de carga, API, E2E e mobile.

## Pré-requisitos

### Node.js
- Node.js 14.17.0, 16.13.0, 18.0.0 e superiores
- Gerenciador de Pacotes do Node.js (npm)

### Javascript
- ES6 e superiores

### Make
Ferramenta para controlar a geração de executáveis a partir de arquivos fonte.

### Aplicativo Mobile - Android

#### Android Studio
Para este projeto, utilizamos o Android Studio para fornecer um ambiente de desenvolvimento integrado (IDE), kit de desenvolvimento (SDK), interface de usuário (UI Automator) para termos emuladores integrados, ferramentas de depuração e dispositivos virtuais (AVD).

#### Appium
Precisamos também do Appium como um servidor HTTP para criar e manipular as sessões do WebDriver para diferentes plataformas, como iOS e Android.

### Variável de ambiente
Precisamos definir e persistir a variável de ambiente como ANDROID_HOME (ou alternativamente ANDROID_SDK_ROOT) com o caminho do diretório do SDK do Android Studio:

```bash
npm i --location=global appium
npm install wd
npm install @appium/doctor --location=global
download appium inspector
appium driver install uiautomator2
sudo apt-get install android-sdk
sudo apt-get install libva-dev
appium server -p 4723 -a 127.0.0.1 -pa /wd/hub
appium -a 127.0.0.1 -p 4723 /wd/hub
