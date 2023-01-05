describe("Items API testing", () => {
   it("Gets all items from API", () => {
      cy.request("/api/items").then((items) => {
         expect(items.status).to.eq(200);
         assert.isArray(items.body);
      });
   });

   it("gets single item from the API", () => {
      cy.request<Item.Unit[]>("/api/items").then((items) => {
         cy.request<Item.Unit>(`/api/items/${items.body[0].id}`).then(
            (item) => {
               expect(item.status).to.eq(200);
               assert.isObject(item.body);
               assert.notStrictEqual(item.body, items.body[0]);
            }
         );
      });
   });

   it("gets related items from the API", () => {
      cy.request<Item.Unit[]>("/api/items").then((items) => {
         cy.request<Item.Unit[]>(`/api/items/${items.body[0].id}/related`)
            .its("body")
            .should("be.an", "array");
      });
   });

   it("gets associated items from the API", () => {
      cy.request<Item.Unit[]>("/api/items").then((items) => {
         cy.request<Item.Unit[]>(`/api/items/${items.body[0].id}/associated`)
            .its("body")
            .should("be.an", "array");
      });
   });

   it("rejects invalid item id", () => {
      cy.request({
         url: "/api/items/0000",
         failOnStatusCode: false,
      })
         .its("status")
         .should("eq", 404);
   });
});
