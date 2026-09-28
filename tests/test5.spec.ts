import {test,expect} from "@playwright/test";

test('test5',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.locator('#datepicker').fill("09/01/2026");
    

});