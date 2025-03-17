import { remote } from 'webdriverio';

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "emulator-5554",
    app: "/path/to/the/app.apk",
    automationName: "UiAutomator2"
  }
};

describe('E2E Test - Amazon Mobile App', function() {
  let client;

  beforeEach(async function() {
    client = await remote(opts);
  });

  it('Deve realizar login e navegar no aplicativo móvel da Amazon', async function() {
    // Realizar login
    await client.$('~login').setValue('seu-email@exemplo.com');
    await client.$('~password').setValue('sua-senha');
    await client.$('~loginBtn').click();

    // Validar que o login foi bem-sucedido
    const accountElement = await client.$('~accountPage');
    const isDisplayed = await accountElement.isDisplayed();
    expect(isDisplayed).to.be.true;

    // Navegar para uma página específica
    await client.$('~searchBox').setValue('laptop');
    await client.$('~searchButton').click();

    // Validar que a navegação foi bem-sucedida
    const searchResults = await client.$('~searchResults');
    const resultsDisplayed = await searchResults.isDisplayed();
    expect(resultsDisplayed).to.be.true;
  });

  afterEach(async function() {
    await client.deleteSession();
  });
});