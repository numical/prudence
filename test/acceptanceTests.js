/* eslint-env mocha */
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const criteriaXPath = By.xpath("//div[@id='criteria']");
const resultsXPath = By.xpath("//div[@id='results']");

describe('Acceptance tests', function () {
  this.timeout(5000);
  let driver;

  before( async() => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080')
  });

  it('should show the Criteria component', async() => {
    await driver.wait(until.elementLocated(criteriaXPath));
    const actual = await driver.findElement(criteriaXPath).getText();
    expect(actual).to.equal('The Criteria component');
  });

  it('should show the Results component', async() => {
    await driver.wait(until.elementLocated(resultsXPath));
    const actual = await driver.findElement(resultsXPath).getText();
    expect(actual).to.equal('The Results component');
  });

  after( async() => {
    await driver.quit();
  });
});