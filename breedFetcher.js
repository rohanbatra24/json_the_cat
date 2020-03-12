const request = require('request');

const breed = process.argv[2];

const link = `http://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(link, (error, _response, body) => {
  if (error && error.code === 'ENOTFOUND') {
    console.log('URL not found');
  } else if (error || body[0] === undefined) {
    console.error('Not found');
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    return;
  }
});
