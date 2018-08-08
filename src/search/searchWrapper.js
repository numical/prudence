const testResults = [
  {},
  {},
  {}
];

const testSearch = async(queryString) => testResults;

const httpSearch = async(queryString) => {
  throw new Error('Not implemented');
};

const search = async(url, queryString) => (url === 'test') ? testSearch(queryString) : httpSearch(queryString);

export {
  search
};