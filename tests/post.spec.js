const { test, expect, request } = require('@playwright/test');

test('should create a new user', async ({ request }) => {
    const newUser = await request.post(`https://pushing-it-backend.herokuapp.com/api/register`, {
        data: {
            username : 'pushingit151',
            password: '123456!',
        }
    });

    expect(newUser.ok()).toBeTruthy();
    console.log(newUser)
})