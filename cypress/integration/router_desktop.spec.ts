describe('Operation on desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Header to footer', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.scrollTo(0, 0)

    cy.get('footer').scrollIntoView()

    cy.pause()
  })

  it('Page portfolio', () => {
    cy.contains('Portfolio').click()

    cy.url().should('include', '/portfolio')

    cy.get('.portfolio-grid')
      .find('.content-sub')
      .should('have.length', 5)
  })
})
