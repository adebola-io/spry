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
      cy.request<CollectionSummary[]>("/api/collections")
         .its("body")
         .then((collections) => {
            cy.request(`/api/collections/${collections[0].id}`)
               .its("body")
               .then((collection) => {
                  assert.hasAllKeys(collection, [
                     "id",
                     "items",
                     "name",
                     "description",
                     "banner",
                     "isFeatured",
                  ]);
                  expect(collection.items).to.be.an("array");
               });
         });
   });
});
