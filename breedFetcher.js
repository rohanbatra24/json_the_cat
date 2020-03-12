const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const link = `http://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(link, (error, response, body) => {
    if (error && error.code === 'ENOTFOUND') {
      callback('URL not found', null);
    } else if (error || body[0] === undefined) {
      callback('Not found', null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description.trim());
      return;
    }
  });
};

module.exports = { fetchBreedDescription };
