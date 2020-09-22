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