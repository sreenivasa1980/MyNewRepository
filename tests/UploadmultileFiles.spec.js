import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload multiple files', async ({ page }) => {
  await page.goto('https://example.com/upload');

  // Locate the file input element
  const fileInput = page.locator('input[type="file"]');

  // Pass an array of paths to upload multiple files at once
  await fileInput.setInputFiles([
    path.join(__dirname, 'fixtures/file1.txt'),
    path.join(__dirname, 'fixtures/file2.txt'),
    path.join(__dirname, 'fixtures/file3.txt')
  ]);

  // Optional: Verify upload completion
  await expect(page.locator('.uploaded-file-list')).toContainText('file1.txt');
});