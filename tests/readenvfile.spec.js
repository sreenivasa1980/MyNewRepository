// @ts-check
import { test, expect } from '@playwright/test';

;


test('validate Orghrm Login',  async ({ page }) => {    
    const url = process.env.URL;
    if (!url) throw new Error('URL is not set in the environment');
    await page.goto(url);
    await page.getByPlaceholder("Username").fill(process.env.AppUSERNAME || '');
    await page.getByPlaceholder("Password").fill(process.env.AppPASSWORD || '');
    await page.getByRole("button", { name: "Login" }).click(); 
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();  
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByText('Demo Source').click();
    await page.getByText('Logout').click(); 



});

