// @ts-check
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {

    console.log('before all')
})


test.afterEach (async () => {
    console.log('after each')
})

test.afterAll (async () => {
    console.log ('afer all')
})

test.beforeEach (async () => {
    console.log ('before each')
})


test('this is a second test' , async () => {
    console.log('second test')

})
 
test('this is a first test' , async () => {
    console.log('first test')

})
 
