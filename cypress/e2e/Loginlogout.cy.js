/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

import Loginlogout_PO from "../integration/pageObjects/Loginlogout_PO"

describe('Testcase for login logout ', () => {
    const loginlogout_PO = new Loginlogout_PO();

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    it('Verify Invalid credentials', () => {
		loginlogout_PO.navigate(globalThis.data.login_URL);
        loginlogout_PO.verify_InvalidLogin(globalThis.data.invalid_username, globalThis.data.invalid_password);
    });

    it('Verify Valid credentials', () => {
		loginlogout_PO.navigate(globalThis.data.login_URL);
        loginlogout_PO.verify_validLogin(globalThis.data.valid_username, globalThis.data.valid_password);
		loginlogout_PO.dashboard();
        loginlogout_PO.logout();
    });

});







