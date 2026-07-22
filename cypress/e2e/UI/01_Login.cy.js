describe('Login', () => {
  it('Deve realizar o criar login com sucesso', () => {
    cy.start()
    cy.goTo('a', 'Signup / Login')
  
    cy.get('[data-qa="signup-name"]').type("Matheus")
    cy.get('[data-qa="signup-email"]').type("Matheus2.@teste.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type("Katana@123")
    cy.get('[data-qa="days"]').select("9")
    cy.get('[data-qa="months"]').select("June")
    cy.get('[data-qa="years"]').select("1999")
    cy.get('[data-qa="first_name"]').type("Matheus")
    cy.get('[data-qa="last_name"]').type("Nunes")
    cy.get('[data-qa="address"]').type("Rua itajaruna, n.48")
    cy.get('[data-qa="country"]').select("Canada")
    cy.get('[data-qa="state"]').type("Canada")
    cy.get('[data-qa="city"]').type("Toronto")
    cy.get('[data-qa="zipcode"]').type("13458-815")
    cy.get('[data-qa="mobile_number"]').type("9737456283")
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()

  })
  
  it.only('login com sucesso', () => {
    cy.start()
    cy.goTo('a', 'Signup / Login')
    cy.submitLoginForm('Matheus2.@teste.com', 'Katana@123')
  })
  
  it('Login com senha invalida', () => {
    cy.start()
    cy.goTo('a', 'Signup / Login')
    cy.submitLoginForm('Matheus1.@teste.com', 'Katana124')

    cy.contains('Your email or password is incorrect!')
      .should('be.visible')
      .and('have.text', 'Your email or password is incorrect!')
  })

})