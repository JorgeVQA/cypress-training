// /<reference types="cypress" />

class ProductsListPage {
  private productToAdd: string;
  private proceedToCheckoutBtnPopUp: string
  private productGroup: string;
  
  constructor() {
    this.productToAdd = ".ajax_add_to_cart_button > span";
    this.proceedToCheckoutBtnPopUp = ".button-container > .button-medium > span";
    this.productGroup = ".product-container";
  }
  
  private findProductByName(prodName: string) {
    return cy.get(this.productGroup).filter(`:contains(${prodName})`);
  }

  public addProductToCart(prodName: string): void {
    this.findProductByName(prodName).get(this.productToAdd).click();
  }

  public continueToCheckoutPopup(): void {
    cy.get(this.proceedToCheckoutBtnPopUp).click()
  }
}

export { ProductsListPage }
