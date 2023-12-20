import {remote} from 'webdriverio';
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "9.0",
  "appium:deviceName": "Galaxy S9 FHD GoogleAPI Emulator",
  "appium:deviceOrientation": "portrait",
  "appium:app": "storage:filename=mda-1.0.15-18.apk",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "sauce:options": {
    "name": "Appium Desktop Session -- Dec 20, 2023 11:43 AM"
  },
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "ondemand.us-west-1.saucelabs.com",
    port: 80,
    path: "/wd/hub",
    capabilities: caps
  });
  let packageName = await driver.executeScript("mobile: getCurrentPackage");
  let sessionDetails = await driver.getSession();
  const el1 = await driver.$("accessibility id:Sauce Lab Back Packs");
  await el1.click();
  const el2 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
  await el2.click();
  const el3 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
  await el3.click();
  
  await driver.touchAction([
    { action: 'press', x: 496, y: 1643 },
    { action: 'moveTo', x: 473, y: 605 },
    'release'
  ]);
  const el4 = await driver.$("accessibility id:Tap to add product to cart");
  await el4.click();
  await driver.deleteSession();
}

main().catch(console.log);