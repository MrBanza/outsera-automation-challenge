const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "emulator-5554",
    app: "/path/to/the/app.apk", // Caminho para o APK do aplicativo móvel
    automationName: "UiAutomator2"
  }
};

describe('E2E Test - Login no Amazon Mobile App', function() {
  let client;

  before(async function() {
    client = await wdio.remote(opts);
  });

  it('Deve realizar login no aplicativo móvel da Amazon', async function() {
    // Realizar login
    await client.$('~login').setValue('seu-email@exemplo.com');
    await client.$('~password').setValue('sua-senha');
    await client.$('~loginBtn').click();

    // Validar que o login foi bem-sucedido
    const accountElement = await client.$('~accountPage');
    const isDisplayed = await accountElement.isDisplayed();
    assert.equal(isDisplayed, true, 'Login bem-sucedido');
  });

  after(async function() {
    await client.deleteSession();
  });
});
