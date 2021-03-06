class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/"
    this.tShirtMenu = ".sf-menu > li > a[title=T-shirts]";  
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click()
  }
}

export { MenuContentPage }
