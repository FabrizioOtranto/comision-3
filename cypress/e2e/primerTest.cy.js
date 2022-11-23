/// <reference types="cypress" />
describe("Primeros tests", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Primer test', () =>{
        cy.visit('');
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('#user').clear()
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true})
        cy.get('#day').select('20')
        cy.get('#month').select('September')
        cy.get('#year').select(10)
        cy.get('#submitForm').click()
        cy.wait(5000)
    });
}); 