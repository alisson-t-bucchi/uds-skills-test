class CartPage {
  elements = {
    cartTitle: () => cy.get('.title'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    cartItem: () => cy.get('.cart_item')
  }

  verifyCartPageLoaded() {
    this.elements.cartTitle().should('contain.text', 'Your Cart')
  }

  verifyProductInCart() {
    this.elements.cartItem().should('have.length.at.least', 1)
  }

  goToCheckout() {
    this.elements.checkoutButton().click()
  }
}

module.exports = new CartPage()
