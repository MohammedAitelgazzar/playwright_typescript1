// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../Pages/loginPage';

// test.only('Sélection du premier élément du menu Gestion de parc', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.acceptCookies();
//     await loginPage.login('demo_qualif01', 'Valid01!');
//     await expect(page).toHaveURL(/accueil/);

//     await page.locator('xpath=//*[@id="ece-nav-header"]/div/div[1]/div[2]/ul/li[2]/button').hover();

//     const firstMenuItem = await page.locator('#id-Gestion-de-parc li').first();

//     await firstMenuItem.click();

//     await expect(page).toHaveURL(/parc/);

//     test.setTimeout(90000);

//     await page.goto('https://qualif.gestion-offre-entreprise.orange-business.com/neo/prive/gestion/#/parc', { timeout: 60000 });

//     await page.locator('xpath=//*[@id="navTerminaux"]').click();
//     await page.waitForTimeout(3000);

//     await expect(page).toHaveURL(/terminaux/);
// });


import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';

test.describe('Tests enchaînés pour le portail client Orange Business', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.acceptCookies();
    await loginPage.login('demo_qualif01', 'Valid01!');
    await expect(page).toHaveURL(/accueil/);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Sélection du premier élément du menu Gestion de parc', async () => {
    await page.locator('xpath=//*[@id="ece-nav-header"]/div/div[1]/div[2]/ul/li[2]/button').hover();
    const firstMenuItem = await page.locator('#id-Gestion-de-parc li').first();
    await firstMenuItem.click();
    await expect(page).toHaveURL(/parc/);
  });

  test('Navigation vers la page des terminaux', async () => {
    await page.goto('https://qualif.gestion-offre-entreprise.orange-business.com/neo/prive/gestion/#/parc', { timeout: 60000 });
    await page.locator('xpath=//*[@id="navTerminaux"]').click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/terminaux/);
  });
});