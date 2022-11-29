describe("The Home Page", () => {
   before(() => {
      cy.visit("/");
   });

   it("shows header", () => {
      const header = cy.get("header");
      header.should("be.visible");
      header.get("nav > a").should("have.length", 6);
      header.should("contain.text", "Home");
   });

   it("shows header on mobile", () => {
      cy.viewport("iphone-x");
      const header = cy.get("header");
      cy.get("#sidebar-btn").should("be.visible");
      header.should("be.visible");
   });

   it("opens search on mobile", () => {
      cy.viewport("iphone-xr");
      cy.get("header #search-icon").click();
      const searchbar = cy.get("#mobile-search-form input");
      searchbar.type("blue jacket");
      searchbar.should("have.value", "blue jacket");
      cy.viewport("macbook-11");
      searchbar.should("not.be.visible");
      cy.viewport("iphone-xr");
      cy.get("#mobile-search-form img[alt='X']").click();
      searchbar.should("have.text", "");
   });

   it("navigates to different collection from header", () => {
      cy.get("header").get("nav").contains("New").click();
      cy.url().should("include", "/collections/new");
   });

   // it("shows collections", () => {
   //    cy.get(".collection").should("be.visible");
   // });
});
