describe("Tests Sections API", () => {
   it("gets all home sections from the API", () => {
      cy.request<HomeSection[]>("/api/homesections")
         .its("body")
         .should("be.an", "array");
   });

   it("should get deals of the day", () => {
      cy.request<HomeSection>("/api/homesections/deals")
         .its("body")
         .should("have.all.keys", "heading", "subHeading", "items")
         .its("heading")
         .should("equal", "Deals of the Day");
   });
});
