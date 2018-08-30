/* global fetch */

import testResults from './testResults.json';

const fetchOptions = Object.freeze({
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
    'Content-Type': 'application/json'
  }
});

const testSearch = async(queryString) => testResults;

const httpSearch = async(url, queryString) => {
  const endpoint = `${url}?${queryString}`;
  const response = await fetch(endpoint, fetchOptions);
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  } else {
    const { status, statusText } = response;
    throw new Error(`Fetch Error; code ${status} : ${statusText}`);
  }
};

const search = async(url, queryString) => {
  switch (url) {
    case 'error':
      throw new Error('Test Error');
    case 'test':
      return testSearch(queryString);
    default:
      return httpSearch(url, queryString);
  }
};

export {
  search
};
