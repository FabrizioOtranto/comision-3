/// <reference types="cypress" />
describe('Sessions', () => {

    before('Generar sesion', () => {
        cy.loginWithSessions()
    })

    beforeEach('recuperar sesion', () => {
        Cypress.session.clearAllSavedSessions()
        cy.loginWithSessions()
        cy.visit('')
    })

    it('visitar todo list page', () =>{
        cy.get('#todolistlink').click()
    })

    it('visitar online shop page', () =>{
        cy.get('#onlineshoplink').click()
    })
})