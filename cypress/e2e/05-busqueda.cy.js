describe("3.5 Búsqueda de productos", () => {
  const termino = "Pliers";

  it("muestra resultados y al menos un nombre contiene lo buscado", () => {
    cy.visit("/");
    cy.buscarProducto(termino);
    cy.get('[data-test="product-name"]').should("have.length.greaterThan", 0);
    cy.get('[data-test="product-name"]').should(($nombres) => {
      const nombres = [...$nombres].map((el) => el.innerText.toLowerCase());
      const hayCoincidencia = nombres.some((n) =>
        n.includes(termino.toLowerCase())
      );
      expect(hayCoincidencia, `algún nombre contiene "${termino}"`).to.be.true;
    });
  });
});