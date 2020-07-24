//Development variables
const express = require('express')
const path = require('path')
const routesFile = require('./routes/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const favicon = require('serve-favicon');


//App variables
const app = express();
const PORT = process.env.PORT || 5000;

//Add body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/img', 'white_favicon.png')))

//Add routes
app.use(routesFile);

//Add column use
app.use(logger('dev'));
app.use(cookieParser());

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//render HTML
app.engine('html', require('ejs').renderFile)

//Start server
function start() {
    try{
        app.listen(PORT, () => console.log(`Server has been started... `))
    }catch (error) {
        console.log(error)
    }
}

start();
