import { test, expect } from '@playwright/test';

test('test8', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Select an item' }).click();
  await page.getByText('Item 21').click();
});