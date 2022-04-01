import { test, expect } from '@playwright/test';

test('submits the search', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('dogs');

  await Promise.all([
    page.waitForResponse((resp) => {
      return resp.url().includes('/api/search') && resp.status() === 200;
    }),
    page.locator('button[type="submit"]').click(),
  ]);

  await page.screenshot({ path: 'snapshot.png' });

  const successElementCount = await page
    .locator('data-testid=search-result')
    .count();

  expect(successElementCount).toBeGreaterThan(0);
});
