import {test,expect} from "@playwright/test";

test('test6',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
});