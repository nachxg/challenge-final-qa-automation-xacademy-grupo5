describe('3.2 Validaciones del formulario de registro', () => {

    const campos = ['first-name', 'last-name', 'dob', 'address', 'postcode', 'city', 'state', 'country', 'phone', 'email', 'password']

    it('TC-2: Registro de usuario con campos vacios', () => {
        cy.visit('/auth/register')
        cy.get('[data-test="register-submit"]').click()
        campos.forEach((campo) => {
            cy.get(`[data-test="${campo}-error"]`).should('be.visible')
        })
        cy.url().should('eq', `${Cypress.config('baseUrl')}/auth/register`)
    })
})