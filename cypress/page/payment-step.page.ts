class PaymentStepPage {
  private paymentMethod: string
  private confirmOrderBtnPayment: string
  private orderConfirmationMessage: string
  
  constructor() {
    this.paymentMethod = "div#HOOK_PAYMENT div:nth-child(1) > div > p > a";
    this.confirmOrderBtnPayment = "p#cart_navigation span";
    this.orderConfirmationMessage = "#center_column > div > p > strong";
  }
  
  public selectPaymentMethod(): void {
    cy.get(this.paymentMethod).click()
  }

  public placeOrderButton(): void {
    cy.get(this.confirmOrderBtnPayment).click()
  }

  public verifyOrderConfirmationMsg(validationMsg: string): void {
    cy.get(this.orderConfirmationMessage).should("have.text", validationMsg)
  }
}

export { PaymentStepPage }
