class AddressStepPage {
  private proceedToCheckoutBtnAddressStep: string;
    
  constructor() {
    this.proceedToCheckoutBtnAddressStep = "[name=processAddress]";
  }

  public continueToCheckoutBtnAddress(): void {
    cy.get(this.proceedToCheckoutBtnAddressStep).click()
  }
}

export { AddressStepPage }
