import { test, expect } from '@playwright/test';

test.describe('My test Group', () => {
  test.beforeEach('login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test.afterAll('Logout', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Logout' }).isVisible();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });

  test('PIM', async ({ page }) => {
    await page.getByRole('link', { name: 'PIM' }).isVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
  });
});

test('soft assertions', async ({ page }) => {
  const softExpect = expect.soft;
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  softExpect(await page.getByRole('textbox', { name: 'Username' }).isVisible()).toBeTruthy();
});

test('download a file', async ({ page }) => {
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
  const download = await downloadPromise;
  await download.saveAs('orangehrm-' + download.suggestedFilename());
  await expect(download.suggestedFilename()).
});