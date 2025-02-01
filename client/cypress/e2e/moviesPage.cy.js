describe('moviesPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movies')
  })
  
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  

  it('cards are interactive', () => {
    // Test card interactions
    cy.get('.card').first().click()
    cy.get('.card').should('have.length.gt', 0)
  })
  

  it('Genre is folded', () => {
    cy.contains('a', 'Genre')
    cy.contains('label', 'Mystery').should('not.exist');
  })
  

  it('MovFilter buttons and dropdowns', () => {
    // Check MovFilter
    cy.contains('a', 'Now Playing')
    cy.contains('a', 'Coming Soon')
    cy.contains('a', 'Location')
    cy.contains('a', 'Genre').click()
    cy.contains('label', 'Mystery')
  })

})

// describe('moviesPage', () => {
//   describe('My First Test', () => {
//     it('finds the content "type"', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
//     })
//   })

// })