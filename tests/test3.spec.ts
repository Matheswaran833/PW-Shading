import {test,expect} from "@playwright/test";

test('test3',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByText('Male', { exact: true }).check();

    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    
    
})