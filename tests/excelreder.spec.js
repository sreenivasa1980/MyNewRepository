import { test } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'node:path';

test('readexcel', async ({ page }) => {
  const filePath = path.resolve(process.cwd(), 'testdata.xlsx');
  const sheetName = 'LoginData';

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Worksheet "${sheetName}" was not found in ${filePath}`);
  }
  const data = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

  console.log(data);
});