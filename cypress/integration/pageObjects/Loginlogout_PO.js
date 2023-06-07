class Loginlogout_PO {
	constructor(){
		this.title= "Allied Packaging Corporation"
	}
	navigate(url){
		cy.visit(url);
		cy.title().should('eq', this.title);
	}
	
    login(username, password) {
    cy.wait(2000);
	cy.get('#mat-input-0').clear().type(username);
	cy.wait(1000);
	cy.get('#mat-input-1').clear().type(password);
	cy.wait(1000);
	cy.get('.mat-checkbox-inner-container').check;
	cy.wait(1000);
	cy.get(':nth-child(6) > .mat-focus-indicator > .mat-button-wrapper').click();
	cy.wait(4000);
	cy.get('#toast-container').then(($msg)=>{
		cy.log($msg.text());
	});
}
 
	dashboard(){
		cy.wait(2000);
	 if(cy.url().should('include', '/dashboard')){
			//cy.log('Dashboard page is displayed');
			return true;
			}else{
				throw Error;				
			}
		}

    logout() {
		//cy.wait(3000);
        cy.get('.hidden-xs').click();
        cy.wait(2000);
        cy.get('.user-body > [href="javascript:void(0)"]').click();
        cy.wait(2000);
        cy.get('.m-t-30').should('include.text', 'Sign In');
        cy.log("user logout successful");
    }
}
export default Loginlogout_PO