import axios from 'axios';
import express from 'express'

const app = express()
const port = 5000;
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

    app.get('/',(req,res)=>{
        axios
             .request(options)
             .then(response => {
                res.json(response.data);
             })
             .catch(error=>{
                res.status(500).json({error:"Error is running data from Render APi"})
             });
    })
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`);
    })
