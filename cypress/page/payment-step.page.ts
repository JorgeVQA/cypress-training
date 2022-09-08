// /<reference types="cypress" />

class PaymentStepPage {
  private paymentMethod: string
  private confirmOrderBtnPayment: string
  private orderConfirmationMessage: string
  
  constructor() {
    this.paymentMethod = ".bankwire";
    this.confirmOrderBtnPayment = "#cart_navigation span";
    this.orderConfirmationMessage = ".cheque-indent > .dark";
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
