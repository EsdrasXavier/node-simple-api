require("appdynamics").profile({
  controllerHostName: 'amelia202010260907519.saas.appdynamics.com',
  controllerPort: 443,

  // If SSL, be sure to enable the next line
  controllerSslEnabled: true,
  accountName: 'amelia202010260907519',
  accountAccessKey: 't1cmnpcj7y8x',
  applicationName: 'Teste',
  tierName: 'Teste',
  nodeName: 'process' // The controller will automatically append the node name with a unique number
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes/todoListRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);

console.log(`Todo list RESTful API server started on: ${port}`);
