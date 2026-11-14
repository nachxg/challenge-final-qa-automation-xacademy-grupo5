describe("3.6 Eliminar un producto del carrito", () => {
  it("TC-4: agrega un producto, lo elimina y el carrito queda vacío", () => {
    cy.visit("/");
    cy.agregarAlCarrito();

    cy.get('[data-test="product-name"]')
      .invoke("text")
      .then((texto) => texto.trim())
      .as("nombreProducto");

    cy.get('[data-test="nav-cart"]').click();

    cy.get("@nombreProducto").then((nombre) => {
      cy.get('[data-test="product-title"]').should("have.text", nombre);
    });

    cy.get("tbody tr").first().find(".btn-danger").click();
    cy.get('[data-test="product-title"]').should("not.exist");
  });
});