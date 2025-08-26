class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username)
    this.elements.passwordInput().clear().type(password)
    this.elements.loginButton().click()
  }
}

module.exports = new LoginPage()
