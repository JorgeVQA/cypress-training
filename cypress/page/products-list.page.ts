class ProductsListPage {
  private productToAdd: string;
  private proceedToCheckoutBtnPopUp: string
  
  constructor() {
    this.productToAdd = ".ajax_add_to_cart_button > span";
    this.proceedToCheckoutBtnPopUp = ".button-container > .button-medium > span";
  }
  
  public addProductToCart(): void {
    cy.get(this.productToAdd).click()
  }

  public continueToCheckoutPopup(): void {
    cy.get(this.proceedToCheckoutBtnPopUp).click()
  }
}

export { ProductsListPage }
