// @ts-check
import { test, expect } from '@playwright/test';
import testData from '../testData/testdata.json' with { type: 'json' };

test('validate Orghrm Login',  async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByPlaceholder("Username").fill(testData.appusername);

  await page.getByPlaceholder("Password").fill(testData.apppassword);
  await page.getByRole("button", { name: "Login" }).click();    
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    await page.getByText('Logout').click();
})



