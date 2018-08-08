/* eslint-env mocha */
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const criteriaXPath = By.xpath("//div[@id='criteria']");
const resultsXPath = By.xpath("//div[@id='results']");
const buttonXPath = By.xpath("//button");

describe('Acceptance tests', function () {
  this.timeout(5000);
  let driver;

  before( async() => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080')
  });

  describe('Initial State', () => {

    it('displays the Criteria component', async() => {
      await driver.wait(until.elementLocated(criteriaXPath));
      const element = await driver.findElement(criteriaXPath);
      expect(element).to.exist; // actually findElement will error
    });

    it('Criteria component displays a Search button', async() => {
      const criteria = await driver.findElement(criteriaXPath);
      const button = criteria.findElement(buttonXPath);
      const actual = await button.getText();
      expect(actual).to.equal('Search');
    });

    it('displays the Results component', async() => {
      await driver.wait(until.elementLocated(resultsXPath));
      const actual = await driver.findElement(resultsXPath).getText();
      expect(actual).to.equal('No search yet');
    });

  });

  describe('Simple Search', () => {

    before( async() => {
      const criteria = await driver.findElement(criteriaXPath);
      const button = criteria.findElement(buttonXPath);
      await button.click();
    });

    it('display the results count', async() => {
      await driver.wait(until.elementLocated(resultsXPath));
      const actual = await driver.findElement(resultsXPath).getText();
      expect(actual).to.equal('3 matches found');
    });

  });

  after( async() => {
    await driver.quit();
  });
});