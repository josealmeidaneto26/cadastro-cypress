describe('template spec', () => {
  it('passes', () => {


    //para entrar no site
    cy.visit('https://meupc.net/')


    //para dar delay
cy.wait(1000)


//para abrir as barras
    cy.get('.navbar-burger').click()


    //para conseguir fazer um caminho pro cadastro 
  cy.get('ul.menu-list').children('li').children('a[href="https://meupc.net/cadastro"]').click()


  //para colocar o nome automaticamente 
cy.get('input[name="nome"]').type("jose teste")


//para colocar o email automaticamente
cy.get('input[name="email"]').type("johndoe@gmail.com")


//para colocar a senha automaticamente
cy.get('input[placeholder="Defina uma senha"]').type('123456')

//para forçar 
cy.get('input[type="checkbox"]').check({force: true})  


//botao para se cadastrar-se
cy.contains('Cadastrar-se').click()


cy.contains('Escolha seu nome de usuário').should('be.visible')



})
})