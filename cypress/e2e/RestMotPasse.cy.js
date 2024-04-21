describe('Mot de pass oublié', () => {
    Cypress.Commands.add('resetPassword', email => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.title().should('eq', 'Your Store')
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
        cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
        cy.contains("Forgot Your Password?")
        cy.get('input[name="email"]').type(email)
        cy.get('button[type="submit"]').contains('Continue').click()
    })
    // Test cases pour la forget password
    it('Reset mot de pass avec succée', () => {
        cy.resetPassword("med@test.com");
        cy.contains(' An email with a confirmation link has been sent your email address.')
    })

    //Ajoutez autres test cases pour la partie forget password
    it("Reset mot de passe d'un compte inexistant", () => {
        cy.resetPassword("wxcvbn@gmail.com");
        cy.contains(" Warning: The E-Mail Address was not found in our records, please try again!");
    });
  })
