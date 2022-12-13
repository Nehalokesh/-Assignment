const express = require('express');
const compression = require('compression')
const helmet = require('helmet')

const app = express()
 
const bodyParser = require('body-parser');

const cors = require('cors');

const sequelize =  require('./util/database');

const user = require('./models/user');

const adminRoutes = require('./routes/admin')

const middleware= require('./middleware/auth');
app.use(bodyParser.json())
app.use(cors())

app.use(helmet()); 

app.use(compression());

app.use(adminRoutes)

sequelize
.sync()
.then((result)=>{
  app.listen(4000)
  console.log('connected')
})
.catch((err)=>{
  console.log(err)
})