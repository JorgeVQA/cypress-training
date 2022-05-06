class ShoppingCartPage {
  private proceedToCheckoutBtnCart: string
  
  constructor() {
    this.proceedToCheckoutBtnCart = ".cart_navigation > .button > span";
  }
  
  public continueToCheckoutCart(): void {
    cy.get(this.proceedToCheckoutBtnCart).click()
  }
}

export { ShoppingCartPage }
