const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.baidu.com');
    await driver.findElement(By.id('kw')).sendKeys('baidu', Key.RETURN);
    await driver.wait(until.titleIs('baidu_百度搜索'), 2000);
  } finally {
    await driver.quit();
  }
})();