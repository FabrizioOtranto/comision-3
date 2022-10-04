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
        cy.get('#user').type(datosLogin.datosValidos.usuario)
        cy.get('#pass').type(datosLogin.datosValidos.contraseña)
        cy.get('#submitForm').click()
        cy.get('[id="todolistlink"]').click();
    })

    it("Deberia ingresar y hacer 5 tareas", () => {
        cy.get('[id="task"]').type(datosTarea.tarea1);
        cy.get('#sendTask').click();
        cy.get('[id="task"]').type(datosTarea.tarea2);
        cy.get('#sendTask').click();
        cy.get('[id="task"]').type(datosTarea.tarea3);
        cy.get('#sendTask').click();
        cy.get('[id="task"]').type(datosTarea.tarea4);
        cy.get('#sendTask').click();
        cy.get('[id="task"]').type(datosTarea.tarea5);
        cy.get('#sendTask').click();
    })

    it("Deberia enocontrar los botones", () => {
        cy.get('[id="all"]').should('exist');
        cy.get('[id="completed"]').should('exist');
        cy.get('[id="active"]').should('exist');
        cy.get('[id="removeAll"]').should('exist');
    })

    it("Deberia ingresar, hacer 2 tareas, completarlas y borrar 1", () => {
        cy.get('[id="task"]').type(datosTarea.tarea1);
        cy.get('#sendTask').click();
        cy.get('p').first().click()
        cy.get('[id="task"]').type(datosTarea.tarea2);
        cy.get('#sendTask').click();
        cy.contains(datosTarea.tarea2).click()
        cy.contains(datosTarea.tarea2).siblings('button').click()
    })
    
    it("Deberia ingresar, hacer 2 tareas y borrar 1", () => {
        cy.get('[id="task"]').type(datosTarea.tarea1);
        cy.get('#sendTask').click();
        cy.get('[id="task"]').type(datosTarea.tarea2);
        cy.get('#sendTask').click();
        cy.contains(datosTarea.tarea1).siblings('button').click()
    })
})