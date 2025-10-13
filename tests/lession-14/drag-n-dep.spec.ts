import { test, expect } from '@playwright/test';

test('drag n drop', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/05-xpath-drag-and-drop.html');
  const startLocator = "#piece-1";
  const tagetLocator = "// div[@data-piece='1']";
//   await page.dragAndDrop(startLocator, tagetLocator);

    await page.locator(startLocator).hover();
    await page.mouse.down();
    await page.locator(tagetLocator).hover();
    await page.mouse.up();
})