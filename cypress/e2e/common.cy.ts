describe("Test the Header", () => {
   beforeEach(() => {
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

   it("should open sidebar", () => {
      cy.viewport("iphone-xr");
      cy.get("#sidebar-btn").click();
      const sidebar = cy.get("aside#sidebar");
      sidebar.should("be.visible");
      sidebar.get("a").should("be.visible");
   });
});

describe("Test the footer", () => {
   beforeEach(() => {
      cy.visit("/");
   });
   it("shows footer", () => {
      cy.viewport("macbook-13");
      const footer = cy.get("footer");
      footer.scrollIntoView().should("be.visible");
      footer.should(
         "include.text",
         "Choose style. Choose comfort. Choose Spry."
      );
      footer.get("button").should("have.text", " Get Started ");
      footer.get(".footer-links").should("have.length", 4);
   });

   it("shows mobile footer", () => {
      cy.viewport("iphone-xr");
      const footer = cy.get("footer");
      footer.get("#footer-tagline").should("be.hidden");
      footer.get(".footer-links").should("be.visible");
   });
});
