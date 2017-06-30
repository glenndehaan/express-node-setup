/**
 * Import base packages
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * Import own packages
 */
const config = require('./config/config');
const webRouter = require('./routers/Web');
const apiRouter = require('./routers/Api');

/**
 * Set template engine
 */
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

/**
 * Configure app to use bodyParser()
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure routers
 */
app.use('/', webRouter);
app.use('/api', apiRouter);

/**
 * Setup default 404 message
 */
app.use((req, res) => {
    res.status(404);

    // respond with json
    if (req.originalUrl.split('/')[1] === 'api') {
        res.send({ error: 'This API route is not implemented yet' });
        return;
    }
    
    res.send('Not found');
});

/**
 * Start listening on port
 */
app.listen(config.application.port, config.application.bind, () => {
    console.log(`Node app is running on: ${config.application.bind}:${config.application.port}`);
});

/**
 * Configure mongo
 */
if(typeof config.mongo !== "undefined"){
    if(config.mongo.auth) {
        mongoose.connect(`mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}/${config.mongo.database}?authSource=admin`);
    }else{
        mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`);
    }
}
