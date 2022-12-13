const rateLimit = require('express-rate-limit');

const loginAccountLimiter = rateLimit({
    windows: 24 * 60 * 60 * 100,//24 hours
    max: 4,
    message: "Too Many requests please try again after 24 hours",
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports={
    loginAccountLimiter,
}