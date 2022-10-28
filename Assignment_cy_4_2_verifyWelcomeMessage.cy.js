/*Task 2 – Login and Logout 
Open https://ineuron-courses.vercel.app/login

Enter username as  ineuron@ineuron.ai
Enter password as ineuron
Click on login button
Verify welcome message 
Note- Message will fade away in 10 seconds

Click on Logout
Verify user is logged out 
*/
describe('Verify Welcome message', () => {


    it('Verify Welcome Message', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('[name="email1"]').type('ineuron@ineuron.ai')
        cy.get('[name="password1"]').type('ineuron', {
            timeout: 1000
        })
        cy.get('.submit-btn').click()
        cy.contains("Welcome iNeuron to iNeuron Courses")
        cy.xpath("//button[text()='Sign out']").click()
        cy.get(".submit-btn").should("be.visible")

    });
});