/*Open https://ineuron-courses.vercel.app/login

Verify title contains Courses
Verify url contains login*/


describe('verify Title', () => {

    it('verify Title', () => {
        cy.visit(" https://ineuron-courses.vercel.app/login")
            .title().should('include', 'Courses')
            .url().should('contain', 'login')
    });




});