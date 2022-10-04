/// <reference types="cypress" />

import { timeout } from '../support/utilidades/constantes'

describe('Esperas', () => {
    let datosLogin;

    before("before", () => {
        cy.fixture('datosUsuario').then(data => {
            datosLogin = data
        })
    });

    beforeEach("beforeEach", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type(datosLogin.datosValidos.usuario)
        cy.get('#pass').type(datosLogin.datosValidos.contraseña)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${datosLogin.datosValidos.usuario}')]`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

    it('esperas explicitas en cypress', () => {
        cy.wait(timeout)
        cy.get('#message').should('exist')
    })

    it('esperas utilizando timeout', () => {
        cy.get('#message', { timeout: timeout }).should('exist')
    })

    it("deberia validar el ultimo mensaje de la pagina", () => {
        cy.get('#message', { timeout: timeout * 2 }).should('have.text', 'You are a man of patience and have waited fifteen seconds')
    })

    it("Utilizando timeouts de forma eficiente", () => {
        cy.get('[role="progressbar"]', { timeout: timeout }).should('not.exist')
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    })

    it.only("Utilizando timeouts de forma eficiente utilizando commands", () => {
        cy.esperarMascaraDeCarga()
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    })
})