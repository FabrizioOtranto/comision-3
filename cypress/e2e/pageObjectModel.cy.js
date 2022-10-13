/// <reference types="cypress" />

import { timeout } from '../support/utilidades/constantes'
import { LoginPage } from '../support/pages/loginPage'
import { RegistroPage } from '../support/pages/registroPage'
import { NavbarPage } from "../support/pages/navbarPage"
import { TodoListPage } from "../support/pages/todoListPage"

describe('Esperas', () => {
    let datosLogin;
    const loginPage = new LoginPage()
    const registroPage = new RegistroPage()
    const navbarPage = new NavbarPage()
    const todoListPage = new TodoListPage()


    before("before", () => {
        cy.fixture('datosUsuario').then(data => {
            datosLogin = data
        })
    });

    beforeEach("beforeEach", () => {
        cy.visit('');
        registroPage.ClickRegisterTogleButton()
        loginPage.login(datosLogin.datosValidos.usuario, datosLogin.datosValidos.contraseña)
        navbarPage.verificarUsuario(datosLogin.datosValidos.usuario)
        cy.get('#todolistlink').click()
    })

    it.only("Deberia agregar 3 tareas al todo list", () => {
        let tarea1 = 'tarea1'
        todoListPage.escribirTarea("tarea1");
        todoListPage.clickSendTaskButton();
        todoListPage.escribirTarea("tarea2");
        todoListPage.clickSendTaskButton();
        todoListPage.obtenerTarea(tarea1).should('have.text', tarea1);
    });
});