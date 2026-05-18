import { test, expect } from '@playwright/test';

test('Проверить текст на локальном сайте', async ({ page }) => {
  await page.goto('file:///T:/Projects/test-site.html');
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Привет, Тимур!');
});