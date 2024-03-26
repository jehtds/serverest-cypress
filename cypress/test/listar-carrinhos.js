describe ("Listar carrinhos", () => {
    it ("Validar soma dos preços dos produtos no carrinho", () => {
        cy.listarCarrinhos().then((response) => {
            cy.sumPrice(response.body.carrinhos).then((soma) => {
                expect(response.body.carrinhos[0].precoTotal).to.eq(soma)
            })
        })
    })

})