const express = require('express');
const app = express();
app.use(express.json());
require('./config/db.config');
require('dotenv').config();
const cors = require ('cors');

app.use(cors());


const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes)

const companyRoutes = require('./routes/company.routes');
app.use('/jobs', companyRoutes)

const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})