//@ts-check

const { test,expect } = require('@playwright/test');

test('validate Orghrm Login',  async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();    
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    await page.getByText('Logout').click();
})