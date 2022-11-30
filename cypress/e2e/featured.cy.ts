describe("Featured Collection Page", () => {
   before(() => {
      cy.visit("/");
   });
   it.only("navigates to different collection from header", () => {
      cy.get("header").get("nav").contains("New").click();
      cy.url().should("include", "/collections/new");
   });
});
