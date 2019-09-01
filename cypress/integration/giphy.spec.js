describe('Giphy detail page', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    });

    it('Should click on a card an show detail page', function () {
        cy.get('[data-cy=card]').first().click();
        cy.get('gif-giphy').should('be.visible');
        cy.get('[data-cy=gif]').should('be.visible');
    });
});
