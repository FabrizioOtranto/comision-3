/// <reference types="cypress" />
describe('Hooks', () => {
    let usuario, contraseña;

    before("before", () => {
        cy.log('Before')
        usuario = 'pushingit';
        contraseña = '123456!';
    });

    beforeEach("beforeEach", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
    })

    it("Deberia ingresar al sistema satisfactoriamente", () => {
        cy.get('#user').type(usuario)
        cy.get('#pass').type(contraseña)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${usuario}')]`).should('exist')
    })

    it("Deberia mostrar un error al no encontrar el usuario", () => {
        cy.get('#user').type(usuario)
        cy.get('#pass').type(contraseña)
        cy.get('#submitForm').click()
        cy.get('p').first().should('have.text', 'No se encontro al usuario')
    })

    afterEach("afterEach", () => {
        usuario = 'pushingit2'
    })

    after('After', () =>{
        cy.log("Enviando reportes por mail")
    })
})