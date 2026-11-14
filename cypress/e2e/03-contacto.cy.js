describe('3.3 Formulario de contacto', () => {
    it('TC-16: Envío del formulario de contacto con datos válidos', () => {
        cy.visit('/contact')

        cy.fixture('contact').then(({ firstName, lastName, email, subject, message }) => {
            cy.get('[data-test="first-name"]').clear().type(firstName)
            cy.get('[data-test="last-name"]').clear().type(lastName)
            cy.get('[data-test="email"]').clear().type(email)
            cy.get('[data-test="subject"]').select(subject)
            cy.get('[data-test="message"]').clear().type(message)
        })

        cy.get('[data-test="contact-submit"]').click()

        cy.get('.alert-success')
            .should('be.visible')
            .should('contain', 'Thanks for your message! We will contact you shortly.')
    })
})