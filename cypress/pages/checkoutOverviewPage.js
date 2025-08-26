class CheckoutOverviewPage {
  elements = {
    title: () => cy.get('.title'),
    finishButton: () => cy.get('[data-test="finish"]')
  }

  verifyPageLoaded() {
    this.elements.title().should('contain.text', 'Checkout: Overview')
  }

  finishCheckout() {
    this.elements.finishButton().click()
  }
}

module.exports = new CheckoutOverviewPage()
