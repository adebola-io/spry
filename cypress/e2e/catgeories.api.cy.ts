describe("Testing Categories API", () => {
   it("fetches all categories", () => {
      cy.request<Category[]>("/api/categories")
         .its("body")
         .should("be.an", "array");
   });
   it("fetches single category", () => {
      cy.request<Category>("/api/categories/0")
         .its("body")
         .its("items")
         .should("be.an", "array");
   });
});
