describe("Home Page", () => {
   beforeEach(() => {
      cy.visit("/");
   });

   it("should have the correct page title", () => {
      cy.title().should(
         "equal",
         "Spry Clothing Store | Comfort and Style for Affordable Prices"
      );
   });

   it("should have banner", () => {
      cy.get("#banner").should("be.visible");
   });

   it("should have a feature section with links to popular collections", () => {
      cy.get(".featured-section")
         .should("be.visible")
         .within(() => {
            cy.get(".featured-item")
               .should("be.visible")
               .and("have.length.greaterThan", 0)
               .each(($el) => $el.is("a"));
         });
   });

   it("should have the deals of the day", () => {
      const section = cy.get("section#deals-of-the-day");
      section.scrollIntoView();
      section.should("be.visible").within(() => {
         cy.get(".item").should("have.length", 10);
      });
   });

   it("should have collections present and visible", () => {
      cy.get(".collection")
         .should("be.visible")
         .and("have.length.greaterThan", 0);
   });
});
