const { test, expect } = require('@playwright/test');
const loginData = require('../fixtures/loginData.json');

test.describe.skip('Esperas', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/")
        await page.locator("#registertoggle").dblclick()
        await page.locator('#user').type(loginData.user)
        await page.locator('#pass').type(loginData.password)
        await page.locator('#submitForm').click()
        await expect(page.locator(`//h2[starts-with(@id,'user_${loginData.user}')]`)).toBeVisible({ timeout: 10000 })
        await page.locator('#waitslink').click()
        await page.locator('button#wait').dblclick()
    })

    test('esperas utilizando timeout', async ({page}) => {
        await expect(page.locator('#message')).toHaveText('You have waited for ten seconds, CONGRATULATIONS', {timeout: 11000});
        await page.screenshot({ path: 'screenshot.png' });
    });
});