describe('3.4 Inicio de sesión con datos incorrectos', () => {
    it('TC-17: Inicio de sesión con contraseña incorrecta', () => {
        cy.fixture('users').then(({ wrongPassword }) => {
            cy.login(wrongPassword)
        })

        cy.get('[data-test="login-error"]')
            .should('be.visible')
            .should('contain', 'Invalid email or password')

        cy.url().should('eq', `${Cypress.config('baseUrl')}/auth/login`)
    })
})