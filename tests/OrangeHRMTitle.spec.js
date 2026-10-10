//@ts-check


const { test,expect } = require('@playwright/test');

test('validate Orghrm title',  async ({ page }) => {
  await page.goto('https://orangehrm.com/');    
  await expect(page).toHaveTitle(/Failed/);

})

