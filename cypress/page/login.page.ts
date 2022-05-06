class LoginPage {
  private loginEmailInput: string
  private loginPasswordInput: string
  private proceedToCheckoutBtnSignIn: string

  constructor() {
    this.loginEmailInput = "#email";
    this.loginPasswordInput = "#passwd";
    this.proceedToCheckoutBtnSignIn = "#SubmitLogin";
  }
  
  public enterCredentialsInLoginAndSignIn(emailin: string, passwordin: string): void {
    cy.get(this.loginEmailInput).type(emailin)
    cy.get(this.loginPasswordInput).type(passwordin)
    cy.get(this.proceedToCheckoutBtnSignIn).click()
  }
}

export { LoginPage }
