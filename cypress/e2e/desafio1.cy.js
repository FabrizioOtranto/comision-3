/// <reference types="cypress" />
describe('Primer desafio', () => {
    const randomNum = Math.floor(Math.random() *1000)    
        it('llegar a completar una tarea', () => {
            let tarea = 'tarea1'
            cy.visit('');
            cy.get('[name="user"]').type(`usuario${randomNum}`);
            cy.get('[id="pass"]').type('password12!');
            cy.get('[value="Male"]').check({force:true});
            cy.get('#day').select(29);
            cy.get('[name="month"]').select('October');
            cy.get('#year').select('1989')
            cy.get('[id="submitForm"]').click();
            cy.get('#todolistlink').click();
            cy.get('[id="sendTask"]').siblings('#task').type(tarea);
            cy.get('[class="chakra-button css-1xp5r05"]').click();
            cy.contains(tarea).click();
    });
});