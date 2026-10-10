// @ts-check
import { test, expect } from '@playwright/test';

test('Handle iFrames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html#google_vignette');
  const Framearea= await page.frameLocator('#singleframe').locator('input[type="text"]');
  await Framearea.fill('Hello World');
  await expect(Framearea).toHaveValue('Hello World');

  })



  test('Handle iFrames Nested', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html#google_vignette');
    await page.locator('a[href="#Multiple"]').click();
    const FMainFrame= await page.frameLocator('iframe[src="MultipleFrames.html"]');
    const firstFrame= await FMainFrame.frameLocator('iframe[src="SingleFrame.html"]');
    const Framearea= await firstFrame.locator('input[type="text"]');
    await Framearea.fill('Hello World');
    await expect(Framearea).toHaveValue('Hello World');
    
    
  })
  


