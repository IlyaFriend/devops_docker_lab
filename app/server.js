const express = require('express');
const app = express();

const PORT = 80

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })