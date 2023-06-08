class Userprofile_PO {
    updateDetails(fname, lname, PhoneNo)
    {
        cy.get('.hidden-xs').click({force:true});
        cy.wait(2000);
		cy.get('[href="#/user-profile"]').click();
        cy.wait(7000);
       	cy.get('#mat-input-6').focus().clear().type(fname);
		cy.wait(2000);
		cy.get('#mat-input-7').focus().clear().type(lname);
		cy.wait(2000);
		cy.get('#mat-input-9').focus().clear().type(PhoneNo);
		cy.wait(3000);
		cy.get('.mat-select-arrow-wrapper').eq(0).click();
		cy.get('.mat-option-text').then(($list)=>{
			cy.log($list.text())
		});
		cy.get('.mat-option-text').contains('zoho', {matchCase:true}).click();
		cy.wait(2000);
		cy.get('.mat-primary > .mat-button-wrapper').click({force:true});		
		cy.wait(5000);
		cy.log('Profile successfully updated');    

        }        
}

export default Userprofile_PO