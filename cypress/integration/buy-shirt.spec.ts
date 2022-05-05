// /<reference types="cypress" />

import {MenuContentPage} from "../page/index";
import {ProductsListPage} from "../page/index";
import {ShoppingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AddressStepPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // cy.visit("http://automationpractice.com/");
    // cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    // cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    // cy.get("[style*=\"display: block;\"] .button-container > a").click();
    // cy.get(".cart_navigation span").click();
    // cy.get("#email").type("aperdomobo@gmail.com");
    // cy.get("#passwd").type("WorkshopProtractor");
    // cy.get("button#SubmitLogin > span").click();
    // cy.get("div#center_column button[type=\"submit\"] > span").click();
    // cy.get("#cgv").click();
    // cy.get("form#form button[type=\"submit\"] > span").click();
    // cy.get("div#HOOK_PAYMENT div:nth-child(1) > div > p > a").click();
    // cy.get("p#cart_navigation span").click();
    // cy.get("#center_column > div > p > strong").should("have.text", "Your order on My Store is complete.");

    // // Step 1. Go to http://automationpractice.com/index.php
    menuContentPage.visitMenuContentPage();
    // // Step 2. Go to T-Shirt
    menuContentPage.goToTShirtMenu();
    // // Step 3. Add to Cart first T-Shirt
    productsListPage.addProductToCart();
    // // Step 4. Click on "Proceed to checkout" button on pop-up window
    // // (The one with the "Product successfully added..." message)
    productsListPage.continueToCheckoutPopup();
    // Step 5. Click on "Proceed to checkout" on the Summary step
    shoppingCartPage.continueToCheckoutCart();
    // Step 6. Write "Email" in "Sign In" step
    loginPage.enterEmailInLogin();
    // Step 7. Write "Password" in "Sign In" step
    loginPage.enterPasswordInLogin();

    // Start creating missing steps from 8 to 13 ...

    // Step 8. Click "Sign In" button
    loginPage.continueToCheckoutBtnSignIn();

    // Step 9. Click on "Proceed to checkout" on the Address step
    addressStepPage.continueToCheckoutBtnAddress();

    // Step 10. Mark Terms and Conditions Checkbox on the Shipping step
    shippingStepPage.markTermsConditionsInAddress();
    // Step 11. Click on "Proceed to checkout" on the Shipping step
    shippingStepPage.continueToCheckoutBtnShipping();

    // Step 12. Click on "Pay by bank wire" on the Payment step
    paymentStepPage.selectPaymentMethod();
    // Step 13. Click on "I confirm my order" on the Payment step
    paymentStepPage.placeOrderButton();

    // ^^^ End creating missing steps from 8 to 13 ^^^

    // Step 14. Verify that in "Final" Step title says "Your Order on My Store is complete" on Payment step
    paymentStepPage.verifyOrderConfirmationMsg();
  });
});
