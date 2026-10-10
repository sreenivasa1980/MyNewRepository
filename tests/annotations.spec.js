// @ts-check
import { test, expect } from '@playwright/test';

test.describe('smoketest', () => {
  test('opens the homepage and selects today', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await page.locator('#datepicker').click();
    await page.locator('.ui-datepicker-today').click();
  })
})

test.describe('sanity test', () => {
  test('opens the homepage and fills the date', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await page.locator('#datepicker').click();
    await page.locator('#datepicker').fill('06/15/2024');
  })
})
