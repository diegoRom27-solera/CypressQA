describe('API testing',() =>{
    it('Endpoint Post:200 STATUS',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/').request('/posts')
    })
    it('Validate Status',()=>{
        cy.request({
            url:'https://rickandmortyapi.com/api/character',
        }).then((response) =>{
            expect(response.status).to.eq(200)
        })
    })
    it('Get Rick Sanchez',()=>{
        cy.request('GET', 'https://rickandmortyapi.com/api/character/1')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq('Rick Sanchez');
          expect(response.body.status).to.eq('Alive'); 
        });
    })
    it('API should have more than 1 character', () => {
        cy.request('GET', 'https://rickandmortyapi.com/api/character')
          .then((response) => {
            expect(response.status).to.eq(200); // Verificar que la respuesta sea exitosa
            expect(response.body.results).to.have.length.above(0); // Verificar que hay al menos un personaje
            cy.log(`Número total de personajes: ${response.body.results.length}`);
          });
      });
      it('Create posts wiht POST method', () => {
        const datos = {
          title: 'QA Automation from s',
          body: 'This is a simple post for QA automation course',
          userId: 1
        };
    
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', datos)
          .then((response) => {
            expect(response.status).to.eq(201);
          });
      });


})