const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const blogpostroutes = require('./blogpostroutes');
const commentroutes=require('./commentroutes')

// When a request is made to the /users or /blogpost path, it will be directed to the index.js in the /users or /blogpost folder.
router.use('/users', userRoutes);
router.use('/blogpost', blogpostroutes);
router.use('/commentroutes',commentroutes);

module.exports = router;
