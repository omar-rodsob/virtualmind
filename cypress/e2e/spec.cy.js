import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';
import specPage from './pages/specPage';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   SpecPage.clickModal();
   SpecPage.typefullName(user.firstName+' '+user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.typeLinkedInProfile(user.linkedinProfile);
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.elements.resuneName().contains('OmarRodriguez-Resume.pdf');   
   SpecPage.typeAboutUs(user.aboutus);
   SpecPage.typeComments(user.cLetter);
   SpecPage.checkenglishLevel();
   SpecPage.checkPromotions();
   SpecPage.clickSubmit();
  })
})