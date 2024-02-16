describe('Order Item', () => {
  it('search, add to cart', () => {
    cy.visit('/');
    cy.get('#filter_keyword').type('E');
    cy.get('.button-in-search').click();



function findItem(name) {
   cy.log('search item');
   if (cy.contains('.fixed_wrapper .prdocutname', name)) {
     cy.get(`[title="${name}"]`).click();
     cy.get('.productname .bgnone').should('have.prop', 'textContent', `${name}`);
     cy.get('.productpagecart');
   } else {
     cy.get('.pagination').contains('>').click();
     findItem(name);
   }
 }
    findItem("Nail Lacquer");
 })

})


