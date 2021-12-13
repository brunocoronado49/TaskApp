import express from "express";
import indexRoutes from './routes/indexRoute'
import { engine } from 'express-handlebars'
import path from 'path'
import morgan from 'morgan'

const app = express();

app.set('views', path.join(__dirname, 'views'))
// Expect absolute route (__dirname) and define where is module views

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        defaultLayout: 'main',
        // get the main file of layouts

        partialsDir: path.join(app.get('views'), 'partials'),
    })
)

app.set('view engine', '.hbs')

// Middleware
app.use(morgan('dev'))
// show the request http in console

app.use(express.urlencoded({ extended: false }))
// change the data to json

// Routes
app.use(indexRoutes)

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

export default app
