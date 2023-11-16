class SpecPages{
    elements ={
        closeModal:()=>cy.get('[class="mc-closeModal"]'),
        applyButton:()=>cy.get('[id="apply_button"]'),
        firstNameInput:()=>cy.get('[name="name"]'),
        emailInput:()=>cy.get('[name="email"]'),
        phoneInput:()=>cy.get('[name="phone"]'),
        resumeFile:()=>cy.get('[name="curriculum"]'),
        resuneName:()=>cy.get('.custom-file-label'),
        linkedinInput:()=>cy.get('[name="linkedin"]'),
        hearAboutInput:()=>cy.get('[name="about-us"]'),
        timeZoneInput:()=>cy.get('[name="job_application[answers_attributes][1][text_value]"]'),
        jobDescription:()=>cy.get('[name="comments"]'),
        desaireRate:()=>cy.get('#job_application_answers_attributes_4_text_value'),
        checkEnglish:()=>cy.get('[name="englishRadioOptions"]').first(),
        checkPromotions:()=>cy.get('[id="promotional2"]'),
        submitButton:()=>cy.get('[type="submit"]')
    }

    clickModal(){
        this.elements.closeModal().click();
    }

    clickApply(){
        this.elements.applyButton().click();
    }

    typefullName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{ action: 'drag-drop',force: true });
    }

    typeLinkedInProfile(linkedinProfile){
        this.elements.linkedinInput().type(linkedinProfile);
    }

    typeAboutUs(about){
        this.elements.hearAboutInput().type(about);
    }

    typeComments(comments){
        this.elements.jobDescription().type(comments);
    }

    checkenglishLevel(){
        this.elements.checkEnglish().check();
    }

    checkPromotions(){
        this.elements.checkPromotions().check();
    }

    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();