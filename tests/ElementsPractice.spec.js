//@ts-check

const { test,expect } = require('@playwright/test');

test('validate Orghrm Login',  async ({ page }) => {

    const animal = 'Cat';
  await page.goto('https://testautomationpractice.blogspot.com/')
  expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible()
  await page.locator('#name').fill("Sreeeni")

  await page.locator('#email').fill("Sreeeni@mail.com")
  await page.locator('#phone').fill("985896895")
  await page.locator('#textarea').fill("Sreeeni address1")
  await page.locator('#male').check()
  await page.locator('#sunday').check()
  await page.locator('#country').selectOption('India ');
  await page.locator('#colors').selectOption({ index: 4 });
  const animalValue =  page.locator('//select[@id="animals"]/option')
  const countvalues =  await animalValue.count()
 console.log('Selected animal value:', animalValue);


//  await page.locator('#animals').selectOption({ value: 'cat' });
for(let i=0; i<countvalues; i++){

    const text = await animalValue.nth(i).textContent();
       
    if(text === animal){
    await animalValue.nth(i).click();
        
        break;
    }   }    

    });


