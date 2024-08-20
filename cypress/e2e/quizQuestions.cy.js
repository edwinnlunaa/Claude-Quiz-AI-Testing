describe('Quiz Generation and Question Navigation', () => { 
    // This is a test case that checks if the quiz is generated correctly and if the user can navigate through the questions.
    it('should generate the quiz and navigate through questions', () => {
         cy.visit('http://localhost:3000/quizgeneration'); 
         cy.get('select#topic').select('javascript'); 
         cy.get('select#difficulty').select('novice'); 
         cy.get('button[type="submit"]').click(); 
         cy.contains('Question', { timeout: 15000 }).should('be.visible'); 
         cy.get('input[placeholder="Type your answer here"]').type('test answer'); 
         cy.get('button').contains('SUBMIT ANSWER').click(); 
         cy.get('.evaluation', { timeout: 15000 }).should('be.visible').and('contain', 'Verner\'s Evaluation'); 
         cy.get('button').contains('NEXT').click(); 
         cy.contains('Question').should('be.visible'); }); });