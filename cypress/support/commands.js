Cypress.Commands.add('completarLogin', ({email, password}) => {
    cy.get('[data-test="email"]').clear().type(email)
    cy.get('[data-test="password"]').clear().type(password)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('login', ({email, password}) => {
    cy.visit('/auth/login')
    cy.completarLogin({email, password})
})

Cypress.Commands.add('agregarAlCarrito', (producto) => {
    if (producto) {
        cy.get(`[data-test="${producto}"]`).click()
    } else {
        cy.get('.card').not(':contains("Out of stock")').first().click()
    }
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="cart-quantity"]').should('be.visible')
})

Cypress.Commands.add('completarFacturacion', ({address, city, state, country, postcode}) => {
    cy.get('[data-test="address"]').clear().type(address)
    cy.get('[data-test="city"]').clear().type(city)
    cy.get('[data-test="state"]').clear().type(state)
    cy.get('[data-test="country"]').clear().type(country)
    cy.get('[data-test="postcode"]').clear().type(postcode)
    cy.get('[data-test="proceed-3"]').click()
})

Cypress.Commands.add('completarPago', ({method, accountName, accountNumber}) => {
    cy.get('[data-test="payment-method"]').select(method)
    cy.get('[data-test="account-name"]').clear().type(accountName)
    cy.get('[data-test="account-number"]').clear().type(accountNumber)
    cy.get('[data-test="finish"]').click()
})

Cypress.Commands.add('buscarProducto', (termino) => {
    cy.intercept('GET', '**/products/search?q=*').as('busqueda')
    cy.get('[data-test="search-query"]').clear().type(termino)
    cy.get('[data-test="search-submit"]').click()
    cy.wait('@busqueda')
})