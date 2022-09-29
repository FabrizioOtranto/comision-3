export class TodoListPage {
    constructor() {
        this.taskInput = '#task'
        this.sendTaskButton = '#sendTask'
    }

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea)
    }

    clickSendTaskButton() {
        cy.get(this.sendTaskButton).click()
    }

    obtenerTarea(tarea) {
         cy.contains(tarea)
    };
};