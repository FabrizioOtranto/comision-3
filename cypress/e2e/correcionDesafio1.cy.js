/// <reference types="cypress" />

describe("Primer Desafio", () =>{
    let numero;

    it("Agregar tarea a To Do", () => {
        numero = Math.floor(Math.random() * 1000);
        cy.visit("https://pushing-front.vercel.app/");
        cy.get('#user').type(`alumno${numero}`);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("8");
        cy.get('#month').select("6");
        cy.get('#year').select(10);
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero}`);
        cy.get('#sendTask').click();
        cy.contains(`Tarea Pendiente Nro: ${numero}`).click()
        cy.xpath(`//p[text()='Tarea Pendiente Nro: ${numero}']`).click()
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero}`);
        cy.get('#sendTask').click();
        cy.get('p').first().click()
    });
});