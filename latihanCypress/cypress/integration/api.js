describe ('api user login', () => {
    it ('extract token', () => {
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
            .should((Response) => {
                expect(Response.status).eq(200)
                cy.log(Response.body)
                cy.screenshot()
            })
    })
})