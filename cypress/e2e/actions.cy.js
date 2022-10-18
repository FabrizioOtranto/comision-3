/// <reference types="cypress" />
describe('Actions', () => {
    let loginComponent, appComponent, boardCollection, loginData;

    before('Setear la data', () => {
        cy.request({
            url: "http://localhost:3000/api/users",
            method: 'DELETE'
        }).then(respuesta => {
            expect(respuesta.status).equal(204)
        });

        cy.fixture('actionsLoginData').then(data => {
            loginData = data
        });
    });

    beforeEach("Ingresar en la url y acceder a los componentes", () => {
        cy.visit("http://localhost:3000/")

        cy.component('root').then(component => {
            appComponent = component
        });

        cy.component('Login').then(component => {
            loginComponent = component
        });

        cy.component('board-collection').then(component => {
            boardCollection = component
        })
    })

    xit("Deberia mostrar el modal de login ", () => {
        cy.window().then(({ app }) => {
            app.showLoginModule = true
        });
    });

    xit("Deberia mostrar el modal de registro y registrarse ", () => {
        appComponent.showLoginModule = true;
        loginComponent.loginCardActive = false;
        loginComponent.signupCardActive = true;
        loginComponent.signupEmail = loginData.user;
        loginComponent.signupPassword = loginData.pass;
        loginComponent.signup();
    });

    xit("Deberia mostrar el modal de login y loguearse", () => {
        appComponent.showLoginModule = true;
        loginComponent.loginEmail = loginData.user;
        loginComponent.loginPassword = loginData.pass;
        loginComponent.login();
    });

    it('Cree un board nuevo en la aplicacion', () =>{
        boardCollection.newBoardInputActive = true
        boardCollection.newBoardTitle = 'board pushing it'
        boardCollection.createNewBoard();
    })
});


