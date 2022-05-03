// /<reference types="cypress" />
describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Step 1. Go to http://automationpractice.com/index.php
    cy.visit("http://automationpractice.com/");
    // Step 2. Go to T-Shirt
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    // Step 3. Add to Cart first T-Shirt
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    // Step 4. Click on "Proceed to checkout" button on pop-up window
    // (The one with the "Product successfully added..." message)
    cy.get("[style*=\"display: block;\"] .button-container > a").click();
    // Step 5. Click on "Proceed to checkout" on the Summary step
    cy.get(".cart_navigation span").click();
    // Step 6. Write "Email" in "Sign In" step
    cy.get("#email").type("aperdomobo@gmail.com");
    // Step 7. Write "Password" in "Sign In" step
    cy.get("#passwd").type("WorkshopProtractor");
    // Finish missing steps from 8 to 13...
    // Step 8. Click "Sign In" button
    cy.get("button#SubmitLogin > span").click();
    // Step 9. Click on "Proceed to checkout" on the Address step
    cy.get("div#center_column button[type=\"submit\"] > span").click();
    // Step 10. Mark Terms & Conditions
    cy.get("input#cgv").click();
    // Step 11. Click on "Proceed to checkout" on the Shipping step
    cy.get("form#form button[type=\"submit\"] > span").click();
    // Step 12. Click on "Pay by bank wire" on the Payment step
    cy.get("div#HOOK_PAYMENT div:nth-child(1) > div > p > a").click();
    // Step 13. Click on "I confirm my order" on the Payment step
    cy.get("p#cart_navigation span").click();
    // End creating missing steps
    // Step 14. Verify that in "Final" Step title says "Your Order on My Store is complete"
    cy.get("#center_column > div > p > strong").should("have.text", "Your order on My Store is complete.");
  });
});
