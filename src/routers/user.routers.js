const KoaRouter = require('koa-router');

const { userControllers } = require('../controllers');
const { userMiddlewares } = require('../middlewares');

const userRouters = new KoaRouter({ prefix: '/user' });

userRouters.post('/register',
  userMiddlewares.verifyUser,
  userControllers.createNewUser
);

module.exports = userRouters;