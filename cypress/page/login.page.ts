class LoginPage {
  private loginEmailInput: string
  private loginPasswordInput: string
  private proceedToCheckoutBtnSignIn: string
  
  constructor() {
    this.loginEmailInput = "#email";
    this.loginPasswordInput = "#passwd";
    this.proceedToCheckoutBtnSignIn = "button#SubmitLogin > span";
  }
  
  public enterEmailInLogin(): void {
    cy.get(this.loginEmailInput).type("aperdomobo@gmail.com")
  }

  public enterPasswordInLogin(): void {
    cy.get(this.loginPasswordInput).type("WorkshopProtractor")
  }

  public continueToCheckoutBtnSignIn(): void {
    cy.get(this.proceedToCheckoutBtnSignIn).click()
  }
}

export { LoginPage }
