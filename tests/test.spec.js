const { test, expect } = require('@playwright/test');

test('user logs in, adds product, verifies cart, and logs out', async ({ page }) => {
  // Student-friendly demo: each step has extra waits and clear comments
  // 1) Go to site and login
  await page.goto('https://www.saucedemo.com/');
  console.log('Opening saucedemo login page');

  // Fill credentials (demo account)
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  // Click login and wait so the action is visible
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
  // longer pause so a student can see the inventory page load
  await page.waitForTimeout(1500);

  // 2) Capture the first product name and add it to cart
  // We use the first product to keep the test simple
  const firstProduct = page.locator('.inventory_item').first();
  const productName = await firstProduct.locator('.inventory_item_name').innerText();
  console.log('Product chosen:', productName);
  // Click add-to-cart button for that product
  await firstProduct.locator('button').click();
  // brief pause to show the button press
  await page.waitForTimeout(1500);

  // 3) Open cart and verify product name is present
  await page.click('#shopping_cart_container a');
  await expect(page).toHaveURL(/cart.html/);
  // Wait so the cart contents are visible to the viewer
  await page.waitForTimeout(1500);
  const cartProductName = await page.locator('.cart_item .inventory_item_name').innerText();
  console.log('Product in cart:', cartProductName);
  expect(cartProductName).toBe(productName);
  await page.waitForTimeout(1500);

  // 4) Logout using the burger menu
  // Open the menu, wait a bit, then click logout so viewers can see the steps
  await page.click('#react-burger-menu-btn');
  await page.waitForTimeout(1200);
  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page.waitForTimeout(1000);
});
