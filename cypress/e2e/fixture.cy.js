// /// <reference types="cypress" />

// describe('Fixture', () => {
//     let loginDatos

//     before('Before', () => {
//         cy.fixture('loginData').then(datos => {
//             loginDatos = datos
//         })
//     })

//     beforeEach("beforeEach", () => {
//         cy.visit('');
//         cy.get('#registertoggle').dblclick();
//     });

//     it('Probar el login con credenciales validas', () => {
//         cy.get('#user').type(loginDatos.primerUsuario.username);
//         cy.get('#pass').type(loginDatos.primerUsuario.password);
//         cy.get('#submitForm').click();
//     });

//     it('Probar el login con credenciales validas 2', () => {
//         cy.get('#user').type(loginDatos.segundoUsuario.username);
//         cy.get('#pass').type(loginDatos.segundoUsuario.password);
//         cy.get('#submitForm').click();
//     });

//     after('After', () => {
//         cy.log('**enviando reportes por discord**');
//     });
// });

// describe('Registro fixture', () => {
//     let registroData, randomNum

//     before('Set de datos', () => {
//         cy.fixture('registerData').then(datos => {
//             registroData = datos
//         })

//         randomNum = Math.floor(Math.random() * 1000)
//     })

//     beforeEach("visitar la pagina", () => {
//         cy.visit('')
//     })

//     it('Deberia registrarse correctamente', () => {
//         cy.get('[name="user"]').type(`${registroData.primerRegistro.username}${randomNum}`);
//         cy.get('[id="pass"]').type(registroData.primerRegistro.password);
//         cy.get(`[value="${registroData.primerRegistro.gender}"]`).check({ force: true });
//         cy.get('#day').select(registroData.primerRegistro.day);
//         cy.get('[name="month"]').select(registroData.primerRegistro.month);
//         cy.get('#year').select(registroData.primerRegistro.year);
//         cy.get('[id="submitForm"]').click();
//     })

//     it('Deberia registrarse correctamente 2', () => {
//         cy.get('[name="user"]').type(`${registroData.segundoRegistro.username}${randomNum}`);
//         cy.get('[id="pass"]').type(registroData.segundoRegistro.password);
//         cy.get(`[value="${registroData.segundoRegistro.gender}"]`).check({ force: true });
//         cy.get('#day').select(registroData.segundoRegistro.day);
//         cy.get('[name="month"]').select(registroData.segundoRegistro.month);
//         cy.get('#year').select(registroData.segundoRegistro.year);
//         cy.get('[id="submitForm"]').click();
//     })

//     afterEach("deberia modificar el numero random", () => {
//         randomNum = Math.floor(Math.random() * 1000)
//     })
// })