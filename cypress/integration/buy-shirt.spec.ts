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
    // Step 7. Write "Password" in "Sign In" step
    // Step 8. Click "Sign In" button
    loginPage.enterCredentialsInLoginAndSignIn("aperdomobo@gmail.com", "WorkshopProtractor");

    // Start creating missing steps from 8^ to 13 ...

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
    paymentStepPage.verifyOrderConfirmationMsg("Your order on My Store is complete.");
  });
});
