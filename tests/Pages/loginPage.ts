import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private loginField = 'input[placeholder="Your login"]'; 
  private passwordField = '#currentPassword'; 
  private loginButton = '#submit-button'; 
  private validationButton = '//*[@id="inputDynHeight"]/div'; 

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      'https://qualif.authentification-entreprise.orange-business.com/authentification?target=https%3A%2F%2Fqualif.espaceclient.orange-business.com%2Fgroup%2Fece2%2Fhome%3FcodeContexte%3DeceDefault'
    );
  }
   async acceptCookies() {
    await this.page.click('#didomi-notice-agree-button');
   }
  async login(username: string, password: string) {
    await this.page.fill(this.loginField, username); 
    await this.page.click(this.loginButton);

    await this.page.waitForSelector(this.passwordField); 
    await this.page.fill(this.passwordField, password); 

    await this.page.click(this.validationButton); 
    await this.page.waitForSelector(this.loginButton);
    await this.page.click(this.loginButton); 
  }
}
