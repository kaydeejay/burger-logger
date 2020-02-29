const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const routes = require('./controllers/controller.js');
app.use(routes);

app.listen(PORT, () => {
  console.log('server listening on: http://localhost.' + PORT);
});