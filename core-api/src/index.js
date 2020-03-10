const User = require('./controllers/User');
const Me = require('./controllers/Me');
const Package = require('./controllers/Package');
const Locomotion = require('./controllers/Locomotion');
const Delivery = require('./controllers/Delivery');
const Travel = require('./controllers/Travel');

module.exports = app => {
  app.use('/user', User);
  app.use('/me', Me);
  app.use('/package', Package);
  app.use('/locomotion', Locomotion);
  app.use('/delivery', Delivery);
  app.use('/travel', Travel);
};
