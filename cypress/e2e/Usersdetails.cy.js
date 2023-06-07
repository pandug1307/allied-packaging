/// <reference types="Cypress"/>

import Loginlogout_PO from "../integration/pageObjects/Loginlogout_PO";
import Usersdetails_PO from "../integration/pageObjects/Usersdetails_PO";

describe('Testcase for Edit User details',() =>{
    const userdetails_PO= new Usersdetails_PO();
    const loginlogout_PO = new Loginlogout_PO();

    before(function(){
    cy.fixture('example').then(function(data){
    globalThis.data=data;
    })
})

it('should be able to edit the user details',()=>{
        loginlogout_PO.navigate(globalThis.data.login_URL);
        loginlogout_PO.login(globalThis.data.login_username, globalThis.data.login_password);
        loginlogout_PO.dashboard();
        userdetails_PO.UserNavigate();
        userdetails_PO.EditUserDetails(globalThis.data.f_name, globalThis.data.l_name, globalThis.data.phoneNo);
        loginlogout_PO.logout();
    });

});