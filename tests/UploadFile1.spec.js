// @ts-check
const { test,expect } = require('@playwright/test');

test('Upload multiple files fielchooser', async ({ page }) => {
  await page.goto('https://easyupload.io/');

  // 1. Start waiting for the filechooser event
const fileChooserPromise = page.waitForEvent('filechooser');

// 2. Click the button/element that opens the native dialog
await page.locator('//span[@class="turbo bold"]').click();

// 3. Resolve the promise to get the file chooser instance
const fileChooser = await fileChooserPromise;

// 4. Set the files on the intercepted chooser instance
await fileChooser.setFiles('C:/Users/Dell/Downloads/sampleFile.jpeg')
} )


