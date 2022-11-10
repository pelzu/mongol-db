let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/mongo-db'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname + '/dist/mongo-db/index.html');
});

app.listen(process.env.PORT || 8080)

