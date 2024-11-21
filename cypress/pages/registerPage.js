/// <reference types="Cypress" />

export class registerPage {

    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        confirmButton: 'input[value="Continue"]'
    }

    openUrl() {
        cy.visit(Cypress.env('URL'))

    }

    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(email) {
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone) {
        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }
    selectCheckbox() {

        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue() {
        cy.get(this.weblocators.confirmButton).click()
    }


}