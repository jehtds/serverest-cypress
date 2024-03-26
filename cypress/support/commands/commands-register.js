Cypress.Commands.add("registerUser", (name, email, password) => {
    cy.request({
        url: "https://serverest.dev/usuarios",
        method: "POST",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: "false"
        },
        failOnStatusCode: false
    })
})


Cypress.Commands.add("listarCarrinhos", () => {
    cy.request({
        url: "https://serverest.dev/carrinhos",
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    })
})

Cypress.Commands.add("sumPrice", (shoppingCartProduct) => {
    let soma = 0;

    for (const carrinho of shoppingCartProduct) {
        if (carrinho.hasOwnProperty("produtos")) {
            for (const produto of carrinho.produtos) {
                if (produto.hasOwnProperty("quantidade")) {
                        if (produto.hasOwnProperty("precoUnitario")) {
                            soma += produto.quantidade * produto.precoUnitario;

                        }
                    }
            }
        }
    }

    return soma;
})
