import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import checkoutPage from '../pages/checkoutPage'
import checkoutOverviewPage from '../pages/checkoutOverviewPage'
import checkoutCompletePage from '../pages/checkoutCompletePage'

describe('Swag Labs - Fluxo de compra', () => {

  it('1 - Login com sucesso, adicionar um produto ao carrinho e finalizar compra', () => {

    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')

    inventoryPage.verifyPageLoaded()

    inventoryPage.addProductToCart()
    inventoryPage.verifyCartHasItem(1)
    inventoryPage.goToCart()

    cartPage.verifyCartPageLoaded()
    cartPage.verifyProductInCart()
    cartPage.goToCheckout()
    
    checkoutPage.verifyPageLoaded()
    checkoutPage.fillCustomerInfo('João', 'Silva', '12345')

    checkoutOverviewPage.verifyPageLoaded()
    checkoutOverviewPage.finishCheckout()

    checkoutCompletePage.verifyCheckoutComplete()
  })

  it('2 - Login com senha inválida', () => {
    loginPage.visit()
    loginPage.login(
      'standard_user', 
      'wrong_password'
    )

    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Username and password do not match')
  })

})

