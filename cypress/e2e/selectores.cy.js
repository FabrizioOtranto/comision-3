// /// <reference types="cypress" />
// describe('Selectores', () =>{

//     it("Encontrar elementos web utilizando cssSelector",() =>{
//         cy.visit('')
//         cy.get('button').should('exist')
//         cy.get('input').should('exist')
//         cy.get('[id="user"]').should('exist')
//         cy.get('#submitForm').should('exist')
//         cy.get('button#submitForm').should('exist')
//         cy.get('button[id="submitForm"]').should('exist')
//         cy.get('.password').should('exist')
//         cy.get('input[class="chakra-input password css-1ekf6i8"]').should('exist')
//         cy.get('[class*="password"]').should('exist') //Que contenga el texto en cuaqluier lugar del valor
//         cy.get('[class^="chakra-input pass"]').should('exist') //Que empiece de x manera
//         cy.get('[class$="password css-1ekf6i8"]').should('exist') //Que termine  de x manera
//     })
// })