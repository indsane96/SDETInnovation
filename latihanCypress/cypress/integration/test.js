describe ('login', () => {
    it ('login with valid data', () => {
        cy.visit('https://testautomasi.com/profile')
            cy.get('#username')
            .type('fullstackdemo')

            cy.get('#password')
            .type('fullstackdemo')

            cy.get('button').contains('Login')
            .click()

            cy.get('.profile-name').then(article => {
                cy.log(article.text())
                })
    })
}) 