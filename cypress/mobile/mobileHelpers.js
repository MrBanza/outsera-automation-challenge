module.exports = {
    login: async function(client, email, password) {
      await client.$('~login').setValue(email);
      await client.$('~password').setValue(password);
      await client.$('~loginBtn').click();
    },
  
    searchProduct: async function(client, product) {
      await client.$('~searchBox').setValue(product);
      await client.$('~searchButton').click();
    },
  
    validateElementDisplayed: async function(client, elementSelector) {
      const element = await client.$(elementSelector);
      const isDisplayed = await element.isDisplayed();
      return isDisplayed;
    }
  };
  