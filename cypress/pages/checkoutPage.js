class CheckoutPage {
  elements = {
    title: () => cy.get('.title'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]')
  }

  verifyPageLoaded() {
    this.elements.title().should('contain.text', 'Checkout: Your Information')
  }

  fillCustomerInfo(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.postalCodeInput().type(postalCode)
    this.elements.continueButton().click()
  }
}

module.exports = new CheckoutPage()
