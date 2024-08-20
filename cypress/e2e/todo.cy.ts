// https://on.cypress.io/api

describe('Can see ToDo page', () => {
  it('visits the app root url', () => {
    cy.visit('/todo')
    cy.getBySel('todo-list-title').contains('ToDo List')
  })
})

describe('Create ToDo', () => {
  it('creates a todo', () => {
    cy.visit('/todo')
    cy.getBySel('todo-text').type("ciao")
    cy.getBySel('todo-add-btn').click()
    cy.getBySel('todo-item').contains('ciao')
  })
})

describe("Mark Todo as Complete", () => {
  it('marks a todo as complete', () => {
    cy.visit('/todo')
    cy.getBySel('todo-text').type("ciao")
    cy.getBySel('todo-add-btn').click()
    cy.getBySel('todo-item').should(
      'have.class', 'not-done'
    );
    cy.getBySel('todo-item-check').click()
    cy.getBySel('todo-item').should(
      'have.class', 'done'
    );
  })
})

describe("Delete Todo", () => {
  it('deletes a todo', () => {
    cy.visit('/todo')
    cy.getBySel('todo-text').type("ciao")
    cy.getBySel('todo-add-btn').click()
    cy.getBySel('todo-item-delete').click()
    cy.getBySel('todo-item').should('not.exist');
  })
})