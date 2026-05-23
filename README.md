# My First Playwright Tests

Этот репозиторий содержит мои первые автотесты, написанные на **Playwright** с использованием **JavaScript/TypeScript**. Проект демонстрирует базовые навыки автоматизации тестирования веб-интерфейсов и настройки CI/CD.

## Что внутри
- **Тесты:** проверка заголовков страниц, видимости элементов, поиска (на примере Google и локального сайта)
- **CI/CD:** настроен **GitHub Actions** — тесты запускаются автоматически при каждом `push` в ветку `main`
- **Инструменты:** Playwright, Node.js, Git, GitHub Actions

## Как запустить тесты локально
```bash
npm install
npx playwright install chromium
npx playwright test