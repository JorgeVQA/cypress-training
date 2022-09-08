// /<reference types="cypress" />

import { StringMatcher } from "cypress/types/net-stubbing";

class MenuContentPage {
  private dressesMenu: string; // AAA Pattern
  private tShirtMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.dressesMenu = ".sf-menu > li > a[title=Dresses]"; // AAA Pattern
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tShirtMenu = ".sf-menu > li > a[title=T-shirts]";
  }

  public goToDressesMenu(): void {
    // AAA Pattern
    cy.get(this.dressesMenu).click();
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }
}

export { MenuContentPage };
