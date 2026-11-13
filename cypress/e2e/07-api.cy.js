describe("3.7 Prueba de API", () => {
  const apiUrl = Cypress.expose("apiUrl");

  it("lista productos y permite iniciar sesión por API", () => {
    cy.request("GET", `${apiUrl}/products`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an("array").and.not.be.empty;
    });
    cy.fixture("users").then(({ valid }) => {
      cy.request("POST", `${apiUrl}/users/login`, {
        email: valid.email,
        password: valid.password,
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.access_token).to.be.a("string").and.not.be.empty;
      });
    });
  });
});