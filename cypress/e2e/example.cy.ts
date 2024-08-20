// https://on.cypress.io/api

describe('Can see ToDo page', () => {
  it('visits the app root url', () => {
    cy.visit('/todo')
    cy.contains('[data-test="todo-list-title"]', 'ToDo List')
  })
})
