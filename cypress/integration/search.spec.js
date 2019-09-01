describe('Search giphy', function () {

    it('Should show most trending gifs', function () {
        cy.server();
        cy.route('GET', '/v1/gifs/trending**').as('getTrendingGifs');
        cy.visit(Cypress.env('baseUrl'));
        cy.wait('@getTrendingGifs').then(function (http) {
            expect(http.status).to.eq(200);
            cy.get('[data-cy=card]').should('have.length', http.response.body.data.length);
        });
    });
    it('Should show a header with an input', function () {
        cy.get('[data-cy=header]').should('be.visible');
    });
    it('Should search for a giphy an then check the results', function () {
        cy.server();
        cy.route('GET', '/v1/gifs/search?q=messi**').as('getSearch');
        cy.get('[data-cy=header]').type('messi');
        cy.wait('@getSearch').then(function (http) {
            expect(http.status).to.eq(200);
            cy.get('[data-cy=card]').should('have.length', http.response.body.data.length);
        });
    });
});
