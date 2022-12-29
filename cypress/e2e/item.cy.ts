describe("Test Product Page", () => {
   it("navigates to product page and changes title", () => {
      cy.visit("/");
      const product = cy.get(".product-item").first();
      product.then(($product) => {
         // Prevent new tab opening.
         $product.removeAttr("target");
      });
      cy.get(".product-item-heading")
         .first()
         .invoke("text")
         .then(($text) => {
            product.click();
            cy.title().should("eq", `${$text} - Spry Clothing Store`);
         });
   });

   describe("Test inside Product Page", () => {
      beforeEach(() => {
         cy.visit("/");
         cy.get(".product-item")
            .first()
            .then(($product) => {
               $product.removeAttr("target");
            })
            .click();
      });

      it("shows product image", () => {
         cy.get("img#product-image").wait(3000).should("be.visible");
      });

      it("shows product name and price", () => {
         cy.get("#product-name").should("be.viible");
         cy.get("#product-price").should("be.visible");
      });

      it("shows tags", () => {
         cy.get("#tags").scrollIntoView().should("be.visible");
      });

      it("shows related items", () => {
         cy.get("#related-items").within(() => {
            cy.get(".product-item").its("length").should("be.greaterThan", 1);
         });
      });
   });
});
