import {test,expect} from "@playwright/test";

test('test4',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.getByRole('combobox', { name: 'Country:' }).selectOption("India");
    await page.getByRole('listbox', { name: 'Colors:' }).selectOption(['Red','Blue','Green']);
    await page.getByRole('listbox', { name: 'Sorted List:' }).selectOption("Rabbit");

    

    
    
})
