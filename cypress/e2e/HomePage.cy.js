describe('Open Mac Page',() =>{
    // npm cypress run --record --key c3b98404-3494-47c5-b406-fa0142e6c7db --cloud 
    // npm run cy:run -b Chrome  --Terminal
    // npm cypress open --Runner
    beforeEach(()=>{
        cy.visit('https://mac.acatlan.unam.mx/')
    })
    it('Mac Page have recent announcements', () => {
        cy.contains('h2','Avisos Recientes').should('exist');
      })
      it('Mac Page have FESA logo', () => {
        cy.get('div#logoder').should('exist');
    })
    it('Enter To Login Button', () => {
        cy.get('a[href="/portada/persona/"]').should('exist');
        cy.get('a[href="/portada/persona/"]').click();
    })
    it('Login Images Are Displayed', () => {
        cy.get('a[href="/portada/persona/"]').should('exist');
        cy.get('a[href="/portada/persona/"]').click();
        cy.get('img#estudiante').should('exist');
        cy.get('img#profesores').should('exist');
        cy.get('img#empresa').should('exist');
    })
    it('Student Login', () => {
        cy.get('a[href="/portada/persona/"]').should('exist');
        cy.get('a[href="/portada/persona/"]').click();
        cy.get('img#estudiante').should('exist');
        cy.contains('p','Alumno/Egresado').should('exist');
        cy.get('p#opc1').click();
        cy.get('#usernames').type('419077006');


    })

})