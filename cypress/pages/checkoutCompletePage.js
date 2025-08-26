class CheckoutCompletePage {
  elements = {
    title: () => cy.get('.title'),
    completeMessage: () => cy.get('.complete-header')
  }

  verifyCheckoutComplete() {
    this.elements.title().should('contain.text', 'Checkout: Complete!')
    this.elements.completeMessage()
      .should('contain.text', 'Thank you for your order!')
  }
}

module.exports = new CheckoutCompletePage()
