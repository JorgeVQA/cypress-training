class ProductsListPage {
  private productToAdd: string;
  private proceedToCheckoutBtnPopUp: string
  private elementHTML: string;
  
  constructor() {
    this.productToAdd = ".ajax_add_to_cart_button > span";
    this.proceedToCheckoutBtnPopUp = ".button-container > .button-medium > span";
    this.elementHTML = ".product-container";
  }
  
  private findProductByName(prodName:string) {
    return cy.get(this.elementHTML).filter(':contains({$prodName})');
  }

  public addProductToCart(prodName:string): void {
    // cy.get(this.productToAdd).click()
    this.findProductByName(prodName).get(this.productToAdd).click();
  }

  public continueToCheckoutPopup(): void {
    cy.get(this.proceedToCheckoutBtnPopUp).click()
  }
}

export { ProductsListPage }
