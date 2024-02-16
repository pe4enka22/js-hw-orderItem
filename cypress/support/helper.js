export function findItem(name){
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