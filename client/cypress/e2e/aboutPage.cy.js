describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('displays Heading and text', () => {
    // Check main headings
    cy.contains('h1', 'About Us')
    cy.contains('p', 'This is a movie application that helps you find and explore movies.')
    cy.contains('p', 'Thank you for choosing us! We hope that our project brings you joy and convenience in the world of cinema.')
  })


  it('h1 "About Us" width check', () => {
    const vw = Cypress.config('viewportWidth');

    // const expectedWidth = 900;   // Approximate with a window width of 1200px
    const expectedWidth = Math.min(Math.max(1, 0.75*vw), 1400); // clamp(1px,75vw,1400px) // app.css>main 

    const tolerance = 140;  // px+- 
    

    cy.contains('h1', 'About Us').invoke('outerWidth').then((width) => {
        expect(width).to.be.greaterThan(expectedWidth - tolerance);
        expect(width).to.be.lessThan(expectedWidth + tolerance);
    });
  });
})
