describe("The Home Page", () => {
   before(() => {
      cy.visit("/");
   });

   it("shows header", () => {
      const header = cy.get("header");
      header.should("be.visible");
      header.get("nav > a").should("have.length", 4);
      header.should("have.text", "Home");
   });

   it("shows header on mobile", () => {
      cy.viewport("iphone-x");
      const header = cy.get("header");
      header.should("be.visible");
   });

   it("navigates to different collection from header", () => {
      cy.get("header").get("nav").contains("New").click();
      expect(cy.url()).to.be("/collections/new");
      cy.contains("New Items").should("be.visible");
   });

   it("shows collections", () => {
      cy.get(".collection").should("be.visible");
   });
});
