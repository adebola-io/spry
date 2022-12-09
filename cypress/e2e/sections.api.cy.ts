describe("Tests Sections API", () => {
   it("gets all home sections from the API", () => {
      cy.request<HomeSection[]>("/api/homesections")
         .its("body")
         .should("be.an", "array");
   });
});
