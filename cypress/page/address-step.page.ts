class AddressStepPage {
  private proceedToCheckoutBtnAddressStep: string;
    
  constructor() {
    this.proceedToCheckoutBtnAddressStep = "div#center_column button[type=\"submit\"] > span";
  }

  public continueToCheckoutBtnAddress(): void {
    cy.get(this.proceedToCheckoutBtnAddressStep).click()
  }
}

export { AddressStepPage }
