describe("Testing Item Search API", () => {
   it("predicts search query", () => {
      cy.request("/api/search/assist/query=red")
         .its("body")
         .should("be.an", "array");
   });
   it("searches for item", () => {
      cy.request("/api/search/q=coat").its("body").should("be.an", "array");
   });
});
