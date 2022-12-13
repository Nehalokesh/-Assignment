const express = require('express');
const router = express.Router()
const user = require('../controllers/user');
const middleware=require('../middleware/auth');

// const expenseController = require('../controllers/expense');

router.post('/signup',user.signup)

router.post('/login',middleware.loginAccountLimiter,user.login);

router.get('/AllUsers',user.getdetails);

router.post('/adduser',user.postDetails);


// router.post('/details',expenseController.postDetails);

// router.get('/detailsinfo',expenseController.getDetails);

router.delete('/delete/:id',user.delete);

module.exports=router;