describe("The Home Page", () => {
   it("successfully loads", () => {
      cy.visit("/");
   });

   it("shows collections", () => {
      expect(cy.get(".collection")).to.be.visible();
   });
});
