const PORT = 5001;
const path =  require('path');
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');
const dashboard = require('./routes/dashboard')


const app = Express();

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(cookieParser());

app.use(Express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);

app.use('/dashboard', dashboard);


app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
});
