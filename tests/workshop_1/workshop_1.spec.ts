import {test} from '@playwright/test';

test('basic Navigation ',async ({page})=>{
    
await page.goto('https://gitlab.com/');
await page.waitForTimeout(3000);
await page.reload();
})



test.skip('intercation with elements',async ({page})=>{

    await page.goto('https://gitlab.com/');
    
    await page.click('#onetrust-accept-btn-handler');
   
    await page.locator('#be-navigation-desktop').getByRole('link',{name: 'Get free trial'}).click();
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John1'); 
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Doe1');

    await page.getByTestId('new-user-first-name-field').fill('John1');
    await page.getByTestId('new-user-last-name-field').fill('Doe1');
})

test.only('test sign in',async ({page})=>{

    await page.goto('https://gitlab.com/');
    
    await page.click('#onetrust-accept-btn-handler');
   
    await page.getByRole('link',{name: 'Sign in'}).click();
})