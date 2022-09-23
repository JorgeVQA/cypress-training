// /<reference types="cypress" />

class PersonalInputPage {
  private inputPageUrl: string;
  private firstNameField: string;
  private lastNameField: string;
  private emailField: string;
  private genderField: string;
  private mobileNumberField: string;
  private dateOfBirthField: string;
  private hobbiesField: string;
  private subjectsField: string;
  private addressField: string;
  private submitFormButton: string;
  private modalInfo: string;
  private stateField: string;
  private cityField: string;

  constructor() {
    this.inputPageUrl = "https://demoqa.com/automation-practice-form";
    this.firstNameField = "input#firstName";
    this.lastNameField = "input#lastName";
    this.emailField = "input#userEmail";
    this.genderField = "input[name='gender']";
    this.mobileNumberField = "input#userNumber";
    this.dateOfBirthField = "input#dateOfBirthInput"
    this.subjectsField = "#subjectsContainer";
    this.addressField = "textarea#currentAddress";
    this.hobbiesField = "div.custom-checkbox";
    this.stateField = "Select State";
    this.cityField = "Select City";
    this.submitFormButton = "#submit";
    this.modalInfo = ".table > tbody > tr";
  }

  // 1.  Open page with the Form to fill
  public openFormPage(): void {
    cy.visit(this.inputPageUrl);
  }

  // 2.  Fill hobbiesList array with all available hobbies
  private enterHobbies(hobbiesList: string[]): void {
    for (let hobbie in hobbiesList) {
      // cy.check(this.hobbiesField)
      cy.get(this.hobbiesField)
        .contains("label", hobbiesList[hobbie])
        .siblings()
        .click({ force: true });
    }
  }

  // 3.  Fill Fields in Form Page with all available information in baseInfo parameter and submit
  public enterDataInForm(baseInfo: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: string;
    hobbies: string[];
    address: string;
    state: string;
    city: string;
  }): void {
    cy.get(this.firstNameField).type(baseInfo.firstName);
    cy.get(this.lastNameField).type(baseInfo.lastName);
    cy.get(this.emailField).type(baseInfo.email);

    cy.get(this.genderField)
      .filter(`input[value=${baseInfo.gender}]`)
      .click({ force: true });

    cy.get(this.mobileNumberField).type(baseInfo.mobileNumber);

    this.enterHobbies(baseInfo.hobbies);

    cy.get(this.addressField).type(baseInfo.address);

    cy.contains(this.stateField)
      .click({ force: true })
      .type(`${baseInfo.state}{enter}`);

    cy.contains(this.cityField)
      .click({ force: true })
      .type(`${baseInfo.city}{enter}`);

    //cy.get(this.submitFormButton).click({ force: true });
    cy.submit();
  }

  // 4.  Get Data from Modal for comparing in next step
  private getDataFromModal(infoToCheck: string) {
    return cy.get(this.modalInfo).contains("td", infoToCheck).siblings();
  }

  // 5.  Compare data in Modal (result after submit) vs. data entered first (input data before submit)
  public checkData(baseInfo: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: string;
    hobbies: string[];
    address: string;
    state: string;
    city: string;
  }): void {
    this.getDataFromModal("Student Name").should(
      "have.text",
      `${baseInfo.firstName} ${baseInfo.lastName}`
    );
    this.getDataFromModal("Student Email").should(
      "have.text",
      `${baseInfo.email}`
    );
    this.getDataFromModal("Gender").should(
      "have.text",
      `${baseInfo.gender}`
    );
    this.getDataFromModal("Hobbies").should(
      "have.text",
      `${baseInfo.hobbies[0]}, ${baseInfo.hobbies[1]}`
    );
    this.getDataFromModal("Address").should(
      "have.text",
      `${baseInfo.address}`
    );
    this.getDataFromModal("State and City").should(
      "have.text",
      `${baseInfo.state} ${baseInfo.city}`
    );
  }
}

export { PersonalInputPage };
