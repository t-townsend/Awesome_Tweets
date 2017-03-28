const Express = require('express');
const router  = Express.Router();

router.get('/', function (request, response) {

  response.render('home');
})

module.exports = router;
