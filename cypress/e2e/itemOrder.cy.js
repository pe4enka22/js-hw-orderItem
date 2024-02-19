import {findItem} from '../support/helper'
describe('Order Item', () => {
    it('search, add to cart', () => {
        cy.visit('/');
        cy.get('#filter_keyword').type('E');
        cy.get('.button-in-search').click();
        findItem('Men+Care Active Clean Shower Tool');
    });
});