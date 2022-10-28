/*Assignment 8

Create category using cypress with data from fixture

Precondition– Create json file“ CourseCategor.json” and store category name which is needed
for below test.

Create custom command login which will accept username and password then perform login functionality.Create another custom command
for logout as well.
Note - Do not duplicate the code
Mouse Hover on Manage
Click on Manage Category
Click on Add New Category
Verify Category as been added
Click on Logout(use custom command)
*/

describe('Create Category', () => {
    beforeEach(function () {
        cy.fixture('CourseCategor').then(function (data) {
            this.data = data;
        })
    })
    it('VerifyCreateCategory', function () {
        cy.login(this.data.Email, this.data.Password)
        cy.wait(3000)

        cy.contains("Manage").realHover()

        cy.wait(3000)

        cy.contains("Manage Categories").invoke("removeAttr", "target").click({
            force: true
        })
        cy.contains('iNeuron Courses').realHover()

        cy.window().then(function (win) {

            cy.contains("Add New Category").click()

            cy.stub(win, "prompt").returns(this.data.Category)
        })
        cy.contains(this.data.Category).should("be.visible")

        //  cy.contains('OK').click(this.data.Category)
        cy.logout()

    });


})