it('shows categories from the server', () => {
  cy.intercept(
    'GET',
    '/categories',
    { fixture: 'categories.json' },
  ).as('getCategories');

  cy.visit('/');
  cy.get('[data-test-id="categories-list"]')
    .should('contain', 'Hem & Trädgård');
});
