/// <reference types="cypress" />

describe('Aserciones', () => { 
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
    })

    it("Validar que el titulo de la pagina sea Waits usando should", () =>{
        cy.get("#title").should("have.text", "Waits")
    })

    it("Validar que el titulo de la pagina sea Waits usando expect", () =>{
        cy.get("#title").invoke('text').then(titulo => {
            expect(titulo).equal('Waits')
        });
    });

    it("Validar que el titulo de la pagina sea Waits usando assert", () =>{
        cy.get("#title").invoke('text').then(titulo => {
            assert.equal(titulo, 'Waits')
        });
    });

    it("Validar la cantidad de elementos cuyo ID es title", () =>{
        cy.get("#title").should("have.length", 1)
    })

    it("Validar la cantidad de caracteres que tiene el titulo con should", () =>{
        cy.get("#title").invoke('text').should("have.length", 5)
    })

    it("Validar la cantidad de caracteres que tiene el titulo con expect", () =>{
        cy.get("#title").invoke('text').then(titulo => {
            expect(titulo).to.have.length(5)
        });
    });

    it("Utilizando and para validar mas de una asersion en la misma sentencia",() =>{
        cy.get("#title").invoke('text').should("have.length", 5).and('equal', 'Waits').and('exist')
    })

    it('Validar atributos con should', () =>{
        cy.get("#title").should('have.attr', 'id', 'title')
    })

    it('Validar el color del titulo con should', () =>{
        cy.get("#title").should('have.css', 'color', 'rgb(51, 255, 255)')
    })

    it('Validar el color del titulo con expect', () =>{
        cy.get("#title").invoke('css', 'color').then(color =>{
            expect(color).equal('rgb(51, 255, 255)')
        })
    })

    it('Validar el atributo del titulo con expect', () =>{
        cy.get("#title").invoke('attr', 'id').then(atributo =>{
            expect(atributo).equal('title')
        })
    })

    it('Validar el usuario', () => {
        expect(datosLogin.datosValidos.usuario).equal('pushingit')
    });
 })