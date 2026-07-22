describe('Pesquisa e Produtos', () => {
  beforeEach(() => {
    cy.start()
    cy.goTo('a', 'Signup / Login')
    cy.submitLoginForm('Matheus1.@teste.com', 'Katana@123')
    cy.goTo('a', 'Products')
  })
  it('Deve pesquisar um produto existente e validar o resultado', () => {
    cy.get('input[placeholder="Search Product"]').type('Fancy Green Top')
    cy.get('#submit_search').click()
    cy.contains('.productinfo', 'Fancy Green Top')
      .should('be.visible')
  })
  it.only('Deve adicionar o produto pesquisado ao carinho e validar a inclusão', () => {
    cy.contains('.productinfo', 'Fancy Green Top')
    cy.contains('a', 'Add to cart').click()
    cy.contains('a', 'View Cart').click()
    cy.contains('h4', 'Fancy Green Top')
      .should('be.visible')
  })
})