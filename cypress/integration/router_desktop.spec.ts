describe('Operation on desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Page portfolio', () => {
    cy.contains('Portfolio').click()

    cy.url().should('include', '/portfolio')

    cy.get('.portfolio-grid')
      .find('.content-sub')
      .should('have.length', 5)
  })
})
