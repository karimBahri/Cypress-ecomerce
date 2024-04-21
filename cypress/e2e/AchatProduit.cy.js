describe('Acheter un produit ', () => {

    Cypress.Commands.add("selectionnerProduit", () => {
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('button[title="Buy now"]').click();
    })

    // Test cases pour l'ajout des produits au panier
    it('Acheter un produit au panier', () => {
        cy.selectionnerProduit();
        cy.get('input[name="telephone"]').clear().type('+216 11111111');
        cy.get('label[for="input-payment-address-new"]').click();
        cy.get('input[name="firstname"]').type('Ali');
        cy.get('input[name="lastname"]').type('Chouerrb');
        cy.get('input[name="address_1"]').type('rbatt');
        cy.get('input[name="city"]').type('Tunis');
        cy.get('select[name="country_id"]').select("214");
        cy.get('select[name="zone_id"]').select("3295");
        cy.get('label[for="input-agree"]').click();
        cy.get('button[id="button-save"]').click();
        cy.get('button[id="button-confirm"]').click();
        cy.contains('body', 'Your order has been placed!');
    })
    
    //Ajoutez autres tests cases pour l'achat des produits 
    it('acheter un produit sans accepter les termes et conditions', () => {
        cy.selectionnerProduit();
        cy.get('button[id="button-save"]').click();
        cy.contains('body', 'Warning: You must agree to the Terms & Conditions!');
    })    
  })
