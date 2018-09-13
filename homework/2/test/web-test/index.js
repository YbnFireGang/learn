const {Builder, By} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    let favorite = 0;
    await driver.get('http://localhost:3000/index');
    await driver.findElement(By.className('j-favorite-num')).getText().then(num => {
      favorite = +num;
    });
    await driver.findElement(By.className('j-add-favorite')).click();
    await driver.findElement(By.className('j-favorite-num')).getText().then( num => {
      console.info(favorite + 1 == num)
    });
  } finally {
    // await driver.quit();
  }
})();