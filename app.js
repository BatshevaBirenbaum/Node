import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer rnd_NbnWbM3jQrezbJBccg8kKK2kJSKh'
    }
  };
  
  axios
    .request(options)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));