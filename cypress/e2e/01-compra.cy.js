describe('3.1 Compra exitosa', function () {
    beforeEach(() => {
        cy.fixture('users').as('users')
        cy.fixture('checkout').as('checkout')
    })

    it('TC-1: Simulación de una compra exitosa', function () {

        const { valid } = this.users
        const { billing, payment } = this.checkout

        cy.visit('/')

        cy.get('.card')
            .should('have.length.greaterThan', 0)

        cy.agregarAlCarrito()

        cy.get('[data-test="product-name"]')
            .invoke('text')
            .then(texto => texto.trim())
            .as('nombreProducto')

        cy.get('[data-test="nav-cart"]').click()

        cy.get('@nombreProducto')
            .then((nombre) => {
                cy.get('[data-test="product-title"]').should('have.text', nombre)
            })

        cy.get('[data-test="proceed-1"]').click()

        cy.completarLogin(valid)

        cy.contains('you are already logged in')
            .should('be.visible')

        cy.get('[data-test="proceed-2"]').click()

        cy.completarFacturacion(billing)

        cy.completarPago(payment)

        cy.get('.alert-success')
            .should('contain', 'Payment was successful')

        cy.get('[data-test="finish"]').click()

        cy.get('#order-confirmation')
            .should('contain', 'Thanks for your order! Your invoice number is INV-')
    })
})