/// <reference types="cypress" />
describe('Fixtures', () => {
    let datosLogin, datosTarea

    before("before", () => {
       cy.fixture('datosUsuario').then(data => {
        datosLogin = data
       })
       cy.fixture('datosTarea').then(data => {
        datosTarea = data
       })
    });

    beforeEach("beforeEach", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
    })

    it("Deberia ingresar al sistema satisfactoriamente", () => {
        cy.get('#user').type(datosLogin.datosValidos.usuario)
        cy.get('#pass').type(datosLogin.datosValidos.contraseña)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${datosLogin.datosValidos.usuario}')]`).should('exist')
    })

    it("Deberia mostrar un error al no encontrar el usuario", () => {
        cy.get('#user').type(datosLogin.datosInvalidos.usuario)
        cy.get('#pass').type(datosLogin.datosInvalidos.contraseña)
        cy.get('#submitForm').click()
        cy.get('p').first().should('have.text', 'No se encontro al usuario')
    })
    
    after('After', () =>{
        cy.log("Enviando reportes por mail")
    })
})