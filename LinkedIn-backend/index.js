const express = require('express');
const app = express();
app.use(express.json());
require('./config/db.config');
require('dotenv').config();

const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes)

const companyRoutes = require('./routes/company.routes');
app.use('/jobs', companyRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})