const mongoose = require('mongoose');

//Connect to Mongodb
const dbURI = 'mongodb+srv://javier:javier98@nodetuts.uqpj3.mongodb.net/Image-app?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));