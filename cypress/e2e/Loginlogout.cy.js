/// <reference types="Cypress"/>

import Loginlogout_PO from "../integration/pageObjects/Loginlogout_PO"

describe('Testcase for login logout ', () => {
    const loginlogout_PO = new Loginlogout_PO();

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    it('Should be able to login and logout', () => {
		loginlogout_PO.navigate(globalThis.data.login_URL);
        loginlogout_PO.login(globalThis.data.login_username, globalThis.data.login_password);
		loginlogout_PO.dashboard();
        loginlogout_PO.logout();
    });

});







