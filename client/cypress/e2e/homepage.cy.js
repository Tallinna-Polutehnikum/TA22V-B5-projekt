describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays welcome message and content', () => {
    // Check main headings
    cy.contains('h1', 'Welcome to My Movie App')
    cy.contains('p', 'Discover your favorite movies!')
  })

  it('carousel navigation works', () => {
    // Test carousel controls
    cy.get('.carousel-control-next').click()
    cy.get('.carousel-control-prev').click()
  })

  it('cards are interactive', () => {
    // Test card interactions
    cy.get('.card').first().click()
    cy.get('.card').should('have.length.gt', 0)
  })
})
