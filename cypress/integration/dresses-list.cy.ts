import { MenuContentPage, DressesListPage } from "../page/index";

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
  });

  it("show the available dresses", () => {
    // ... realiza la prueba
    menuContentPage.visitMenuContentPage(); // Visit Main Page http://automationpractice.com/

    menuContentPage.goToDressesMenu(); // Arrange:   Visit Dresses menu and list all dresses
    dressesListPage.validateItemsNumber(arrayDressNameList.length); // Act:  Navigate to Dress Menu and validate quantity
    dressesListPage.validateItemsNames(arrayDressNameList); // Assert: Verify 5 dresses are listed, then then names displayed are the same as expected, (ordered list matters)
  });
});

//  #################### OTHER TRIES #####################

//    arrayDresses = new Array(5);
//    for (let i = 0; i < 5; i++) {
//      arrayDresses[i] = cy.wrap(item).should("contain.text", names[i]);
//  }
