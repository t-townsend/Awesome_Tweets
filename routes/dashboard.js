const Express = require('express');
const router  = Express.Router();

router.get('/', function (request, response) {

  const {tweets } = request.cookies;

  response.render('tweet_app', {tweets});
})

router.post('/', function (request, response) {
  const { username, post } = request.body;
  const { tweets = [] } = request.cookies;

  response.cookie('tweets', [{username, post}, ...tweets])
  response.redirect('/dashboard');
  // console.log(username, post);
})


//
// router.post('/', function (request, response) {
//   const { post } = request.body;
//   const { posts = [] } = request.cookies;
//
//   response.cookie('posts', [post, ...posts])
//   response.redirect('/tweet_app');
// })



module.exports = router;
