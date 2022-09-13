/// <reference types="cypress" />

describe("Primer test", () =>{
    let numero;

    it("Deberia registrarse en Pushing IT en nuestro primer test", () => {
        numero = Math.floor(Math.random() * 1000);
        cy.visit("https://pushing-front.vercel.app/");
        cy.get('#user').type("PushingIt2");
        cy.get('#user').clear();
        cy.get('#user').type(`PushingIt${numero}`);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("31");
        cy.get('#month').select("1");
        cy.get('#year').select(10);
        cy.get('#submitForm').click();
    });
});