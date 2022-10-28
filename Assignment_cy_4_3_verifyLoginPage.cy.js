/*Task 3- Write 4 test in same suite for verifying error message

Test 1- Do not enter username and password and click on login button
Verify error message should contains “Email and Password is required”

Test 2- Enter username and do not enter password and click on login button
Verify error message should contains “Password is required”

Test 3- Enter password and do not enter username and click on login button
Verify error message should contains “Email is required”

Test 4- Enter wrong username and wrong password and click on login button
Verify error message should contains “USER Email Doesn't Exist”


*/


describe('Verify Login page', () => {

    it('Verify with Empty username and empty password', () => {
        try {
            cy.visit(" https://ineuron-courses.vercel.app/login")

            cy.get('.submit-btn').click()
        } catch (e) {
            console.log("Email and Password is required");
        }
    });

    it('Verify with username and empty password', () => {
        try {
            cy.visit(" https://ineuron-courses.vercel.app/login")
            cy.get('[name="email1"]').type('ineuron@ineuron.ai')

            cy.get('.submit-btn').click()
        } catch (e) {
            console.log("Password is required");
        }
    });
    it('Verify with username and empty password', () => {
        try {
            cy.visit(" https://ineuron-courses.vercel.app/login")
            cy.get('[name="email1"]').type('ineuron12@ineuron.ai')
            cy.get('[name="password1"]').type('1231', {
                timeout: 1000
            })
            cy.get('.submit-btn').click()
        } catch (e) {
            console.log("USER Email Doesn't Exist");
        }
    });


});