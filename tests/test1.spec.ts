import {test,expect} from "@playwright/test";

test('test1',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('textbox',{name:'Enter Name'}).fill("mathesh");
    await page.getByRole('textbox',{name:'Enter Email '}).fill("madhu833@gmail.com");
    
})