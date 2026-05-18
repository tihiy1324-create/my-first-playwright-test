import { test, expect } from '@playwright/test';

test('Открыть Википедию и проверить заголовок', async ({ page }) => {
  await page.goto('https://ru.wikipedia.org');
  await expect(page).toHaveTitle('Википедия — свободная энциклопедия');
});