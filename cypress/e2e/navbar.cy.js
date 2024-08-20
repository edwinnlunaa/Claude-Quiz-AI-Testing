describe('Navbar Navigation', () => {
  //  This is a test case that checks if the "Quiz Generation" link in the navbar navigates the user to the correct page.
  it('should navigate to the Quiz Generation page when the link is clicked', () => { 
    cy.visit('http://localhost:3000/');
    cy.contains('Quiz Generation').click();
    cy.url().should('include', '/quizgeneration');
    cy.contains('Quiz Generation Options');
  });
  
  //This is another test case that checks if the "Account" link in the navbar navigates the user to the correct page.
  it('should navigate to the Account page when the link is clicked', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Account').click();
    cy.url().should('include', '/account');
    cy.contains('You have a streak of 5 days!');
  });
});