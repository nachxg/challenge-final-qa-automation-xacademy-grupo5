describe("3.6 Eliminar un producto del carrito", () => {
  it("agrega un producto, lo elimina y el carrito queda vacío", () => {
    cy.visit("/");
    cy.get('[data-test="product-1"] [data-test="product-name"]')
      .invoke("text")
      .then((texto) => {
        const nombre = texto.trim();
        cy.agregarAlCarrito("product-1");
        cy.get('[data-test="nav-cart"]').click();
        cy.get('[data-test="product-title"]').should("contain.text", nombre);
      });
    cy.get("tbody tr").first().find(".btn-danger").click();
    cy.get('[data-test="product-title"]').should("not.exist");
  });
});