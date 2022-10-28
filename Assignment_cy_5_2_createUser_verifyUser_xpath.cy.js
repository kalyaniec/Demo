/*Task 1– Create new user and login with same user

Open https: //ineuron-courses.vercel.app/
    Click on Login Button
Click on New User link(use contains method)

Verify Sign up button is disabled before entering value

Enter Name, Email, Password
Select testing from checkbox
Select Gender
Select State as“ Goa”
Click on Sign up

User above used details
for login
Verify user is able to login
Click on Logout and verify user is able to see login page*/
describe('Create User and Validation using xpath', () => {
    it('Create User', () => {

        cy.visit("https://ineuron-courses.vercel.app/")
        //cy.wait(5000)
        cy.xpath('//button').contains('Log in ').click()
        cy.xpath('//a[@href="/signup"]').click()
        cy.xpath('//input[@name="name"]').type('KalyaniSethy3')
        cy.xpath('//input[@name="email"]').type('kalyaniec3@gmail.com')
        cy.xpath('//input[@type="password"]').type('kalyani3')

        cy.xpath('//label[@class="interest"]').contains('Testing').click()

        cy.xpath('//input[@type="radio"]').check('Female')
        cy.get('select').select('Goa', 'Goa')
        cy.xpath("//button[@type='submit']").click()

    })


    it('Verify Login', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.xpath('//input[@name="email1"]').type('kalyaniec3@gmail.com')
        cy.xpath('//input[@name="password1"]').type('kalyani3', {
            timeout: 1000
        })
        cy.xpath('//button[@class="submit-btn"]').click()
        cy.contains('Sign out').click()
        cy.contains('Sign in').should("be.visible")
    })




    console.log("complete");
})