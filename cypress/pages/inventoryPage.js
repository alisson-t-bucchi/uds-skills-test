class InventoryPage {
  elements = {
    title: () => cy.get('.title'),
    addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    shoppingCartIcon: () => cy.get('.shopping_cart_link')
  }

  verifyPageLoaded() {
    this.elements.title().should('contain.text', 'Products')
  }

  addProductToCart() {
    this.elements.addToCartButton().click()
  }

  verifyCartHasItem(count = 1) {
    this.elements.shoppingCartBadge().should('have.text', count.toString())
  }

  goToCart() {
    this.elements.shoppingCartIcon().click()
  }
}

module.exports = new InventoryPage()
