//import { get } from "lodash";

class Usersdetails_PO{
    UserNavigate(){
        cy.get('.icon-sidebar').eq(1).click();
        cy.wait(3000);
    }

    EditUserDetails(fname, lname, phoneno){
        cy.get('.ng-star-inserted').eq(52).click();
        cy.wait(3000);
        cy.get('#mat-input-7').focus().clear().type(fname);
        cy.wait(1000);
        cy.get('#mat-input-8').focus().clear().type(lname);
        cy.wait(1000);
        cy.get('#mat-input-10').focus().clear().type(phoneno);
        cy.wait(1000);
        cy.get('.mat-select-arrow').eq(0).click();
        cy.get('.mat-option-text').then(($list)=>{
        cy.log($list.text());
        });
        cy.wait(200);
        cy.get('.mat-option-text').contains('March Facility', {matchCase:true}).click();
        cy.wait(500);
        cy.get('.mat-expansion-panel-header-title').each(($headertitle)=>{
            cy.log($headertitle.text());
        });
        cy.get('.mat-expansion-indicator').eq(2).click({force:true});
        cy.wait(500);
        cy.get('.mat-expansion-panel-header-title').eq(7);
        cy.get('#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force:true});
        cy.wait(500);
        //cy.get('.mat-expansion-panel-header-title').eq(6).contains('Machine', {matchCase:true});
        //cy.get('#mat-checkbox-13').click({force:true});
        //cy.wait(500);
        cy.get('.mat-button-wrapper').eq(1).click({force:true});
        cy.wait(3000);
        cy.get('#toast-container').then(($msg)=>{
            cy.log($msg.text());
        });
        cy.wait(2000);
    }
}
export default Usersdetails_PO