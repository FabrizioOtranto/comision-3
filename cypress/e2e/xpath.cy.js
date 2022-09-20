describe('Xpath', () => {

    it('Encontrar elementos utilizando xpath absoluto', () => {
        cy.visit('')
        cy.xpath("/html/body/div[1]/div/div/div/form/div[1]/input");
    })

    it('Encontrar elementos utilizando xpath relativo', () => {
        cy.visit('')
        cy.xpath("//input[@id='user']");
    })

    it('Encontrar elementos utilizando contains con xpath', () => {
        cy.visit('')
        cy.xpath("//input[contains(@id,'use')]");
    })

    it("Encontrar elementos utilizando operador logico and", () =>{
        cy.visit('') 
        cy.xpath("//input[@id='user' and @name='user']")
    })

    it("Encontrar elementos utilizando operador logico or", () =>{
        cy.visit('') 
        cy.xpath("//input[@id='user' or @name='uuser']")
    })

    it("Encontrar elementos utilizando operador logico or", () =>{
        cy.visit('') 
        cy.xpath("//input[@id='user' and not(@name='pass')]")
    })

    it("Encontrar elementos utilizando starts-with", () =>{
        cy.visit('') 
        cy.xpath("//input[starts-with(@cy-get,'us')]")
    })

    it("Encontrar elementos utilizando text()", () =>{
        cy.visit('') 
        cy.xpath("//button[text()='Register']")
    })

    it("Encontrar elementos utilizando descendant", () =>{
        cy.visit('')
        cy.xpath("//fieldset//descendant::input[@value='Male']")
    })

    it("Encontrar elementos utilizando ancestor", () =>{
        cy.visit('')
        cy.xpath("//input[@value='Male']//ancestor::fieldset")
    })

    it("Encontrar elementos utilizando child", () =>{
        cy.visit('')
        cy.xpath("//label//child::input[@value='Male']")
    })

    it("Encontrar elementos utilizando parent", () =>{
        cy.visit('')
        cy.xpath("//input[@value='Male']//parent::label")
    })

    it("Encontrar elementos utilizando following sibbling", () =>{
        cy.visit('')
        cy.xpath("//label[@for='user']//following-sibling::input")
    })

    it("Encontrar elementos utilizando preceding sibbling", () =>{
        cy.visit('')
        cy.xpath("//input[@id='user']//preceding-sibling::label")
    })

    it("Encontrar elementos combinando xpath y metodo contains", () =>{
        cy.visit('')
        cy.xpath("//button[@id='submitForm']").contains("Register")
    })

    it("Encontrar elementos combinando xpath y cssSelector", () =>{
        cy.visit('')
        cy.xpath("//button[text()='Register']").get("#submitForm")
    })

    it("Deberia encontrar al nombre por su ID en la pantalla de home", () =>{
        let numero = Math.floor(Math.random() * 1000);
        let usuario = `pushingit${numero}`
        cy.visit("");
        cy.get('#user').type(usuario);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("31");
        cy.get('#month').select("1");
        cy.get('#year').select(10);
        cy.get('#submitForm').click();
        cy.xpath(`//h2[starts-with(@id,'user_${usuario}')]`).should('exist')
    });
})