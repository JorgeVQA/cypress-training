class ProductsListPage {
  private productToAdd: string;
  private proceedToCheckoutBtnPopUp: string
  
  constructor() {
    this.productToAdd = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.proceedToCheckoutBtnPopUp = "[style*=\"display: block;\"] .button-container > a";
  }
  
  public addProductToCart(): void {
    cy.get(this.productToAdd).click()
  }

  public continueToCheckoutPopup(): void {
    cy.get(this.proceedToCheckoutBtnPopUp).click()
  }
}

export { ProductsListPage }
