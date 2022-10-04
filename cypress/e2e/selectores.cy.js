describe('Selectores', () => { 
    
    it("localizando selectores con cssSelectors", () =>{
        cy.visit("")
        cy.get("button").should("exist")
        cy.get('[id="user"]').should("exist")
        cy.get("#pass").should("exist")
        cy.get("input#user").should("exist")
        cy.get('input[name="user"]').should("exist")
        cy.get("select#day > [value='1']").should("exist")
        cy.get(".password").should("exist")
        cy.get("input.password").should("exist")
        cy.get("input[class='chakra-input password css-1ekf6i8']").should('exist')
        cy.get("input[class*='password']").should("exist")
    });

    it('Utilizando .find', () => {
        cy.visit("")
        cy.get("fieldset").find('input[value="Male"]').should("exist")
    });

    it('Children', () => {
        cy.get("select#day").children("option[value='1']").should('exist')
    });

    it('parent', () => {
        cy.get("option[value='1']").parent("select#day").should('exist')
    });

    it('Siblings', () => {
        cy.get("input#user").siblings("label").should('exist')
    });

    it('Ubicando elementos por su texto', () => {
        cy.contains("Register")
        cy.get('button').contains("register", {matchCase:false})
    });
 });