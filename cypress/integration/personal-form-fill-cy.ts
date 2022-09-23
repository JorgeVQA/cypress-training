// /<reference types="cypress" />

import {
  PersonalInputPage,
} from "../page/index";

const personalDataToFill = {
  firstName: "Jorge",
  lastName: "Velasquez",
  email: "jycmv@hotmail.com",
  gender: "Male",
  mobileNumber: "3007805194",
  hobbies: ["Sports", "Reading"],
  address: "Cra 81 32-60",
  state: "Rajasthan",
  city: "Jaipur",
};

describe("Personal input page", () => {
  let inputPage: PersonalInputPage;

  before(() => {
    inputPage = new PersonalInputPage();
    inputPage.openFormPage();
  });
  it("The form is filled and compared with result table", () => {
    inputPage.enterDataInForm(personalDataToFill);
    inputPage.checkData(personalDataToFill);
  });
});
