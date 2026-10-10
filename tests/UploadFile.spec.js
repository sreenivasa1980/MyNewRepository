// @ts-check
const { test,expect } = require('@playwright/test');

test('UploadFile',  async ({ page }) => {
  
await page.goto('https://demoqa.com/upload-download');
await page.locator('#uploadFile').setInputFiles('C:/Users/Dell/Desktop/sign.jpeg')


test('UploadFile2',  async ({ page }) => {
// Upload multiple files (pass an array)
await page.locator('i#uploadFile').setInputFiles([
  'path/to/file1.txt',
  'path/to/file2.txt'
})
