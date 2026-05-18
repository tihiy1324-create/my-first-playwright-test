import { test, expect } from '@playwright/test';

test('Открыть локальный сайт и проверить заголовок', async ({ page }) => {
  await page.goto('file:///T:/Projects/test-site.html');
  await expect(page).toHaveTitle('Тестовый сайт Тимура');
});