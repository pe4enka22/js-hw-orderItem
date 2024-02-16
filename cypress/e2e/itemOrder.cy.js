describe('Order Item', () => {
    it('search, add to cart', () => {
        cy.visit('/');
        cy.get('#filter_keyword').type('E');
        cy.get('.button-in-search').click();


        function findItem(name){
            cy.log('search item');
            cy.get('body').then((body)=>{

                if(body.find(`[title="${name}"]`).length>0){
                    cy.get(`[title="${name}"]`).click();
                    cy.get('.productname .bgnone').should('have.prop', 'textContent', `${name}`);
                    cy.get('.productpagecart');
                } else {
                    cy.get('.pagination').contains('>').click();
                    findItem(name);
                }

            });
        }
        findItem('Men+Care Active Clean Shower Tool');

    });
});