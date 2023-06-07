/// <reference types="Cypress" />

describe('Cypress web security', () => {
    it('Validate vising two different domain', () => {
        cy.visit("http://www.webdriveruniversity.com/"); 
        cy.visit("https://automationteststore.com/");
    });

    it('Validate vising two different domain via user section   ', () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com/"); 
        cy.visit("https://automationteststore.com/").invoke('removeAttr', 'target').click();
    });

    it('Origin command', () => {
        cy.origin('http://www.webdriveruniversity.com/' , () => {
            cy.visit("/");
        })

        cy.origin('https://automationteststore.com/' , () => {
            cy.visit("/");
        })
        
    });
})



