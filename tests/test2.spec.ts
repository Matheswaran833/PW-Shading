import {test,expect} from "@playwright/test";

test('test2',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('textbox',{name:'Enter Phone'}).fill("111111111");
    await page.getByRole('textbox',{name:'Address'}).fill("112 school street");
    
})