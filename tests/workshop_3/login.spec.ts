




// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../Pages/loginPage';

// test.describe('Tests enchaînés pour le portail client Orange Business', () => {
//   test('Connexion au portail client Orange Business', async ({ page }) => {
//     const loginPage = new LoginPage(page); 
//     await loginPage.goto(); 
//     await loginPage.acceptCookies(); 
//     await loginPage.login('demo_qualif01', 'Valid01!'); 
//     await expect(page).toHaveURL(/accueil/);
//     await page.locator('#id-Gestion-de-parc').hover();
//     await page.waitForTimeout(3000); 
//   });

//   test('Gestion des parcs', async ({ page }) => {
//     await page.goto('https://qualif.espace-client.orange-business.com/accueil');
//     await page.locator('#id-Gestion-de-parc').hover();
//     await page.waitForTimeout(6000);
//   });
// });

import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';

test.only('Sélection du premier élément du menu Gestion de parc', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.acceptCookies();
    await loginPage.login('demo_qualif01', 'Valid01!');
    await expect(page).toHaveURL(/accueil/);



    await page.locator('xpath=//*[@id="ece-nav-header"]/div/div[1]/div[2]/ul/li[2]/button').hover();

    const firstMenuItem = await page.locator('#id-Gestion-de-parc li').first();

    await firstMenuItem.click();

    await expect(page).toHaveURL(/parc/);

    await page.goto('https://qualif.gestion-offre-entreprise.orange-business.com/neo/prive/gestion/#/parc');

    await page.locator('xpath=//*[@id="navTerminaux"]').click();

    test.setTimeout(60000);


     await page.waitForTimeout(30000);


     await expect(page).toHaveURL(/terminaux/);



});
