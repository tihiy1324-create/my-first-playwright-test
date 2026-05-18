import { test, expect } from '@playwright/test';

test('Открыть Google и проверить заголовок и поле поиска', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');

  const searchBox = page.locator('textarea[name="q"]');
  await expect(searchBox).toBeVisible();
});