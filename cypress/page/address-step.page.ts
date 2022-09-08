// /<reference types="cypress" />

class AddressStepPage {
  private proceedToCheckoutBtnAddressStep: string;
    
  constructor() {
    this.proceedToCheckoutBtnAddressStep = "button[name=processAddress]";
  }

  public continueToCheckoutBtnAddress(): void {
    cy.get(this.proceedToCheckoutBtnAddressStep).click()
  }
}

export { AddressStepPage }
