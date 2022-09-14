// /<reference types="cypress" />

import {
  MenuContentPage, 
  DressesListPage
} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let arrayDressNameList: Array<string>;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    arrayDressNameList = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
    menuContentPage.visitMenuContentPage();
  });

  it("show the available dresses", () => {
    // ... realiza la prueba
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNumber(arrayDressNameList.length);
    dressesListPage.validateItemsNames(arrayDressNameList);
  });
});
