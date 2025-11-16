# SauceDemo Playwright Test (student-level)

This small project contains one Playwright test written in JavaScript. It's meant to be easy to read for students and does the following on https://www.saucedemo.com/:

- Log in with a demo account
- Add one product to the cart
- Verify the product name in the cart
- Log out

Why this is student-friendly
- Lots of comments and console logs so you can follow the test steps.
- The test runs with a visible browser and deliberate pauses so you can watch each action.

Quick start (Windows PowerShell)

1. Install dependencies and Playwright browsers:

```powershell
npm install
npx playwright install
```

2. Run the test (default: visible browser and slowed actions):

```powershell
npm test
```

3. If you want the fast/headless run (no UI):

```powershell
npx playwright test --headed=false
```

How to publish this to GitHub (student steps)

1. Create a new empty repository on GitHub (use the website and name it e.g. `saucedemo-playwright`).
2. From the project folder, run these commands (replace `<your-username>` and repo name):

```powershell
git init
git add .
git commit -m "Add Playwright test for SauceDemo (student-level)"
git remote add origin https://github.com/<your-username>/saucedemo-playwright.git
git branch -M main
git push -u origin main
```

After pushing, copy the repository URL and paste it where requested so you can share the link.

Notes and tips
- Test credentials used: `standard_user` / `secret_sauce` (public demo account).
- You can change the speed by editing `playwright.config.js` (the `slowMo` value).
- If anything fails during install or test, copy the terminal output and I can help troubleshoot.

If you want, I can also add a simple GitHub Actions workflow so the test runs automatically when you push.
