/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

import Loginlogout_PO from "../integration/pageObjects/Loginlogout_PO"
import Userprofile_PO from "../integration/pageObjects/Userprofile_PO"

describe('Testcase for User Profile', () => {
    const loginlogout_PO = new Loginlogout_PO();
    const userprofile_PO = new Userprofile_PO();

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    it('Verify user able to update their Profile', () => {
		loginlogout_PO.navigate(globalThis.data.login_URL);
        loginlogout_PO.verify_validLogin(globalThis.data.valid_username,globalThis.data.valid_password);
        loginlogout_PO.dashboard();
        userprofile_PO.updateDetails(globalThis.data.first_name,globalThis.data.last_name,globalThis.data.phone_no);
        loginlogout_PO.logout();
    });
	
	/*it('verify the dashbard page', () => {
		//const loginlogout_PO = new Loginlogout_PO();
		loginlogout_PO.dashboard()
       
    });

    it('Should be able to successfully submit userProfile', () => {
		//const userprofile_PO = new UserProfile_PO
        userprofile_PO.updateDetails(globalThis.data.first_name,globalThis.data.last_name,globalThis.data.phone_no);
    });

    it('Should be able to successfully logout', () =>{
		//const loginlogout_PO = new Loginlogout_PO();
        loginlogout_PO.logout();
    });*/
});