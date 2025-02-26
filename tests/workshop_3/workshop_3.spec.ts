// import { test, expect } from '@playwright/test';

// test('client', async ({ page }) => {
    
//     await page.goto('https://qualif.authentification-entreprise.orange-business.com/authentification?target=https%3A%2F%2Fqualif.espaceclient.orange-business.com%2Fgroup%2Fece2%2Fhome%3FcodeContexte%3DeceDefault');
//     const loginInput = await page.getByPlaceholder('Your login');

//     await page.click('#didomi-notice-agree-button');

//     await loginInput.fill('demo_qualif01');
    
//     await page.click('#submit-button');
    
//     await page.waitForSelector('#currentPassword'); 
//     const passwordInput = await page.locator('#currentPassword'); 
//     await passwordInput.fill('Valid01!');
    
//     await page.click('//*[@id="inputDynHeight"]/div');
//     await page.waitForSelector('#submit-button'); 

//     await page.click('//*[@id="submit-button"]');

//     await expect(page).toHaveURL(/accueil/);


//     await page.waitForTimeout(6000);
    


//     });


 
