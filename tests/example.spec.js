// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('New search', () => {
	test('Should search 4 items containing "iphone"', async ({ page }) => {
		await page.goto('http://localhost:3000/');

		await page.fill('input[name="search"]', 'iphone');

		await page.click('button[type="submit"]');

		const itemsSelector = 'article > a';

		await page.waitForSelector(itemsSelector);

		const items = await page.locator(itemsSelector);

		const count = await items.count();
		expect(count).toBe(4);

		for (let i = 0; i < count; i++) {
			const itemText = await items.nth(i).textContent();
			expect(itemText?.toLowerCase()).toContain('iphone');
		}
	});
});
