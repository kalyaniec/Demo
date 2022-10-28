/*Create 5 user using data driven test in Cypress

Create 5 json file user1.json, user2.json etc.
Store all user information which is required to create user.
Please use different data in each fixture file.
Same script will be used to create 5 users. 

Open https://ineuron-courses.vercel.app/
Click on Login Button
Click on New User link (use contains method)
	
Enter Name, Email, Password
Select testing from checkbox
Select Gender
Select any State 
Click on Sign up

User above used details for login
Verify user is able to login
Click on Logout and verify  user is able to see login page


*/

const testValueFixture = [{

        "name": "User1",
        "context": "1"
    },
    {
        "name": "User2",
        "context": "2"
    }, {
        "name": "User3",
        "context": "3"
    },
    {
        "name": "User4",
        "context": "4"
    },
    {
        "name": "User5",
        "context": "5"
    }
]

describe('Create User', () => {

    testValueFixture.forEach(function (fixture) {

        describe('Fetching User data', function () {
            before(function () {
                cy.fixture(fixture.name).then(function (testdata) {
                    this.data = testdata

                })
            })
            it('Add Users', function () {
                cy.addUser(this.data.username, this.data.email, this.data.password, this.data.gender, this.data.place)
            })

            it.only('Verify Login', function () {
                cy.wait(3000)
                cy.visit("https://ineuron-courses.vercel.app/login")
                cy.wait(3000)
                cy.get('[name="email1"]').type(this.data.email)
                cy.get('[name="password1"]').type(this.data.password, {
                    timeout: 1000
                })
                cy.get('.submit-btn').click()
                cy.contains('Sign out')
                    .should("be.visible")
                    .click()
                cy.contains('Sign in').should("be.visible")
            })




        })

    })



})