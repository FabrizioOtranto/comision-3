const { test, expect } = require('@playwright/test');
const loginData = require('../fixtures/loginData.json');

test.describe.skip('Primera suite con playwright', () => {
    let user, random;

    test.beforeAll(async () => {
        console.log('before all')
    })

    test.beforeEach(async ({ page }) => {
        await page.goto("https://pushing-front.vercel.app/")
        console.log('Before each')
    });

    test('Primer test con playwright', async ({ page }) => {
        random = Math.floor(Math.random() * 1000);
        user = loginData.user + random
        await page.locator('#user').fill(user);
        await page.locator('#pass').fill(loginData.password);
        await page.locator('[value="Male"]').check({ force: true });
        await page.locator('#day').selectOption('15')
        await page.locator('#month').selectOption({ label: 'September' })
        await page.locator('#year').selectOption({ label: '1994' })
        await page.locator('#submitForm').click();
        await expect(page.locator(`[id^='user_${user}_']`)).toBeVisible({timeout:10000});
        await page.waitForTimeout(5000);
    });

    test('Segundo test con playwright', async ({ page }) => {
        random = Math.floor(Math.random() * 1000);
        user = loginData.user + random
        await page.locator('#user').fill(user);
        await page.locator('#pass').fill(loginData.password);
        await page.locator('[value="Male"]').check({ force: true });
        await page.locator('#day').selectOption('15')
        await page.locator('#month').selectOption({ label: 'September' })
        await page.locator('#year').selectOption({ label: '1994' })
        await page.locator('#submitForm').click();
        await expect(page.locator(`[id^='user_${user}_']`)).toBeVisible();
    });

    test.afterEach(async () => {
        console.log('afterEach')
    });

    test.afterAll(async () => {
        console.log('after all')
    })
});