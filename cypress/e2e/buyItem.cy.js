 describe('Pagina de Produtos',  ()=> {
    it('Acessar a pagina de produtos', () =>{
    cy.start()
    cy.goTo('a', 'Signup / Login')
    cy.submitLoginForm('Matheus1.@teste.com','Katana@123')
    cy.goTo('a', 'Products')

    it('Pesquisar nome do produto e pesquisar')
    cy.get('input[placeholder="Search Product"]').type('Fancy Green Top')
    cy.get('#submit_search').click()

    cy.contains('a','Add to cart').click()
    cy.contains('a', 'View Cart').click()

    })
  })