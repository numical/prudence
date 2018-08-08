const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const xPathById = (name, id) => By.xpath(`//${name}[@id='${id}']`);
const criteriaXPath = xPathById('div', 'criteria');
const resultsXPath = xPathById('div', 'results');
const buttonXPath = By.xpath("//button");
const urlInput = xPathById('input', 'URL');
const queryStringInput = xPathById('input', 'Query String');
const errorXPath = xPathById('div', 'error');

describe('Acceptance tests', function () {
  this.timeout(5000);
  let driver;

  before( async() => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080')
  });

  describe('Initial State', () => {

    describe('Criteria component', () => {
      let criteria;
      before( async() => {
        await driver.wait(until.elementLocated(criteriaXPath));
        criteria =  await driver.findElement(criteriaXPath);
      });

      it('is displayed', async () => {
        expect(criteria).to.exist; // actually findElement will error
      });

      it("displays a URL input defaulted to github repository search api", async () => {
        const input = criteria.findElement(urlInput);
        const actual = await input.getAttribute('value');
        expect(actual).to.equal('https://api.github.com/search/repositories');
      });

      it("displays a blank query string input", async () => {
        const input = criteria.findElement(queryStringInput);
        const actual = await input.getAttribute('value');
        expect(actual).to.equal('');
      });

      it('displays a Search button', async () => {
        const criteria = await driver.findElement(criteriaXPath);
        const button = criteria.findElement(buttonXPath);
        const actual = await button.getText();
        expect(actual).to.equal('Search');
      });
    });

    describe('Results component', () => {

      it('is displayed', async () => {
        await driver.wait(until.elementLocated(resultsXPath));
        const actual = await driver.findElement(resultsXPath).getText();
        expect(actual).to.equal('No search yet');
      });

    });

  });

  describe("Simple Search (url is 'test')", () => {

    before( async() => {
      const criteria = await driver.findElement(criteriaXPath);
      const input = criteria.findElement(urlInput);
      await input.clear();
      await input.sendKeys('test');
      const button = criteria.findElement(buttonXPath);
      await button.click();
    });

    it('display the test results count', async() => {
      await driver.wait(until.elementLocated(resultsXPath));
      const actual = await driver.findElement(resultsXPath).getText();
      expect(actual).to.equal('1196 items found');
    });

  });

  describe("Error on Search (url is 'error')", () => {

    before( async() => {
      const criteria = await driver.findElement(criteriaXPath);
      const input = criteria.findElement(urlInput);
      await input.clear();
      await input.sendKeys('error');
      const button = criteria.findElement(buttonXPath);
      await button.click();
    });

    it("displays an error message", async() => {
      await driver.wait(until.elementLocated(errorXPath));
      const actual = await driver.findElement(errorXPath).getText();
      expect(actual).to.include('the search reported an error');
      expect(actual).to.include('Test Error');
    });

  });

  after( async() => {
    await driver.quit();
  });
});