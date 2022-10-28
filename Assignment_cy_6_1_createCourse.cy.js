/*Task 1- Create course using cypress with data from fixture

Precondition – Create json file “CourseData.json” and store all test data which is needed for below test.

Create custom command login which will accept username and password then perform login functionality. 
Note- Do not duplicate the code
Mouse Hover on Manage
Click on Manage Course
Click on Add New Course
Do not fill any values and click on Save
Verify error message “Please select a thumbnail!”

Upload any file from fixture folder
Enter course name, description
Type your name as INSTRUCTOR 
Note- use delay as argument to type slow use delay of 1000 ms
Set price 200
Select start date and end date
Click on category as Testing
Click on Save
Verify course added in the list
Select the same course and click on delete
Verify course deleted from the list
*/


describe('Create course', () => {
    beforeEach(function () {
        cy.fixture('CourseData').then(function (data) {
            this.data = data;
        })
    })
    it('VerifyTheErrorMessageInCreateCourse', function () {
        cy.login(this.data.Email, this.data.Password)
        cy.wait(3000)

        cy.contains("Manage").realHover()
        cy.contains("Manage Courses").click()
        cy.contains('iNeuron Courses').realHover()
        cy.contains("Add New Course").click()
        cy.xpath("//button[contains(text(),'Save')]").click()
        cy.contains('Please select a thumbnail!').should("be.visible")
        cy.contains('Cancel').click()
        cy.contains('Sign out').click()
    });

    it('Add course successfully', function () {
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })


        cy.login(this.data.Email, this.data.Password)
        cy.wait(3000)

        cy.contains("Manage").realHover()
        cy.contains("Manage Courses").click()
        cy.contains('iNeuron Courses').realHover()

        cy.wait(3000)
        cy.contains("Add New Course").click()
        cy.get('input[type=file]').selectFile('cypress/fixtures/demo.jpeg')
        cy.xpath('//input[@id="name"]').type(this.data.Coursename)
        cy.xpath('//textarea[@id="description"]').type(this.data.description)
        cy.xpath('//input[@name="instructorName"]').type(this.data.instructor)
        cy.xpath("//input[@name='price']").type(this.data.price)
        cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > input').click()
        cy.xpath("//div[@class='react-datepicker__month']//div[contains(@aria-label,'October 22nd, 2022')]").click()
        cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > input').click()
        cy.xpath("//div[contains(@aria-label,'November 23rd, 2022')]").click()
        cy.contains("Select Category").click()
        cy.xpath("//div[@class='menu-items']//button[text()='Testing']").click()
        cy.xpath("//button[contains(text(),'Save')]").click()
        cy.wait(3000)
        cy.xpath("//td[text()='" + this.data.Coursename + "']/following-sibling::td[9]").click()
        // $x("//td[text()='CypressAutomation_kalyani']/following-sibling::td[9]")
        cy.contains(this.data.Coursename).should('not.exist')
        cy.contains('Sign out').click()
    })
})