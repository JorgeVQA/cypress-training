class ShippingStepPage {
  private agreeTermsConditionsCheckbox: string
  private proceedToCheckoutBtnShipping: string
  
  constructor() {
    this.agreeTermsConditionsCheckbox = "#cgv";
    this.proceedToCheckoutBtnShipping = "[name=processCarrier]";
  }
  
  public markTermsConditionsInAddress(): void {
    cy.get(this.agreeTermsConditionsCheckbox).click()
  }

  public continueToCheckoutBtnShipping(): void {
    cy.get(this.proceedToCheckoutBtnShipping).click()
  }
}

export { ShippingStepPage }
