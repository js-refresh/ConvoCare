var express = require('express');
// const checkAuth = require('../auth/checkAuth');
var router = express.Router();
const models = require('../models');

/* GET posts. */
// router.get('/', async (req, res) => {
//   const threads = await models.Thread.findAll({
//     include: [{ model: models.User, attributes: ['username', 'id'] }],
//   });

//   res.json(threads);
// });

// router.post('/', checkAuth, async (req, res) => {
  // if any fields missing
//   if (!req.body.title || !req.body.content) {
//     //   send 400 error
//     return req.status(400).json({
//       error: 'Please include all title and content',
//     });
//   }

//   // create new thread
//   const thread = await models.Thread.create({
//     title: req.body.title,
//     content: req.body.content,
//     UserId: req.session.user.id,
//   });

//   // send back new post data
//   res.status(201).json(post);
// });

router.post('/:id/comments', async (req, res) => {
  const thread = await models.Thread.findByPk(req.params.id)
  if (!thread) {
    res.status(404).json({
      error: "Could not find post with that id"
    })
  } 
  thread.createComment({
    content: req.body.content,
    ThreadId: req.params.id,
    UserId: req.session.user.id,
  });
  res.status(201).json(comment);
})

module.exports = router;
