describe("Featured Collection Page", () => {
   before(() => {
      cy.visit("/");
   });
   it("opens a featured collection", () => {
      cy.get(".featured-collection").first().click();
      cy.url().should("include", "/featured/");
      cy.get("#collection-banner img").wait(3000).should("be.visible");
   });
});
