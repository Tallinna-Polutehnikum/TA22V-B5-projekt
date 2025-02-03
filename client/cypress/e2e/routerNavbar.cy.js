describe('visit pages via navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Home button navigates to a new url', () => {
        cy.visit('http://localhost:3000/movies')
        cy.get('#n1').contains('Home').click()
        cy.url()
        .should('not.include', '/movies')
    })


    it('About Us button navigates to a new url', () => {
        cy.get('#n1').contains('About Us').click()
        // Should be on a new URL which
        // includes '/movies'
        cy.url()
        .should('include', '/about')
    })


    it('Checkout button navigates to a new url', () => {
        cy.get('#n1').contains('Checkout').click()
        cy.url()
        .should('include', '/checkout')
    })


    it('Movies button navigates to a new url', () => {
        cy.get('#n1').contains('Movies').click()
        cy.url()
        .should('include', '/movies')
    })


    it('sign In button...', () => {
        cy.get('#n1').get('[id=signIn]')
        // cy.url().should('include', '/xxx')
    })

  })
