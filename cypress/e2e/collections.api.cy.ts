describe("Collections API Testing", () => {
   it("gets all collections from the API", () => {
      cy.request<CollectionSummary[]>("/api/collections").then(
         (collections) => {
            expect(collections.status).to.be.eq(200);
            expect(collections.body).to.be.an("array");
         }
      );
   });

   it("gets all featured collections from the API", () => {
      cy.request<CollectionSummary[]>("/api/collections/featured").then(
         (featured) => {
            expect(featured.status).to.be.eq(200);
            expect(featured.body).to.be.an("array");
         }
      );
   });

   it("gets a collection from the API", () => {
      cy.request<Collection>("/api/collections/0001")
         .its("body")
         .then((collection) => {
            expect(collection)
               .to.have.property("name")
               .and("description")
               .and("items");
            expect(collection.items).to.be.an("array");
         });
   });
});
