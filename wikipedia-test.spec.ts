import { test, expect } from '@playwright/test';

test('Google поле поиска видимо', async ({ page }) => {
  await page.goto('https://www.google.com');
  const searchBox = page.locator('textarea[name="q"]');
  await expect(searchBox).toBeVisible();
});