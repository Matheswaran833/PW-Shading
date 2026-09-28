import { test, expect } from '@playwright/test';

test('test7', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
});