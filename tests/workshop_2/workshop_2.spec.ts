import{test,expect} from '@playwright/test';


test('Automation ', async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

     const newtest = await page.getByPlaceholder('What needs to be done?');

     await newtest.fill('aitelgazzar');
     await newtest.press('Enter');
     await newtest.fill('mohammed');
     await newtest.press('Enter');
     await page.waitForTimeout(3000);

     const firstTodo =await page.getByTestId('todo-item').nth(0);
     await firstTodo.getByRole('checkbox').check();


     const secondTodo = page.getByTestId('todo-item').nth(1);
     await expect(secondTodo).not.toHaveClass('completed');
     await expect(firstTodo).toHaveClass('completed');
     await page.waitForTimeout(3000);



});


test.only('hadling form ',async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    const placeholder = '[placeholder = "What needs to be done?"]';
    await page.fill(placeholder,'tess');
    await page.locator(placeholder).press('Enter');
    const checkbox = await page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(3000);
});


