describe('Teste de API - Automation Exercise', () => {
    it('Deve listar todos os produtos com sucesso e validar a estrutura', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)

            expect(body.responseCode).to.eq(200)

            expect(body).to.have.property('products')
            expect(body.products).to.be.an('array')
            expect(body.products.length).to.be.greaterThan(0)
            
            const primeiroProduto = body.products[0]
            expect(primeiroProduto).to.have.property('name')
            expect(primeiroProduto).to.have.property('price')

            expect(primeiroProduto.name).to.not.be.empty
        })
    })

    it('Deve listar todas as marcas dos produtos', () => {
        cy.request({
            method: 'GET',
            url:'https://automationexercise.com/api/brandsList'
        }).then((response) => {
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(200)

            expect(body).to.have.property('brands')
            expect(body.brands).to.be.an('array')
            expect(body.brands.length).to.be.greaterThan(0)

            const primeiraMarca = body.brands[3]

            expect(primeiraMarca).to.have.property('brand')
            expect(primeiraMarca).to.not.be.empty

        })
    })

    it('Deve retornar status Code 400 em uma pesquisa de produto', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct'
        }).then((response) =>{
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(400)


        })
    })
})