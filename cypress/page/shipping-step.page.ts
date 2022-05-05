class ShippingStepPage {
  private agreeTermsConditionsCheckbox: string
  private proceedToCheckoutBtnShipping: string
  
  constructor() {
    this.agreeTermsConditionsCheckbox = "#cgv";
    this.proceedToCheckoutBtnShipping = ".cart_navigation > .button > span";
  }
  
  public markTermsConditionsInAddress(): void {
    cy.get(this.agreeTermsConditionsCheckbox).click()
  }

  public continueToCheckoutBtnShipping(): void {
    cy.get(this.proceedToCheckoutBtnShipping).click()
  }
}

export { ShippingStepPage }
