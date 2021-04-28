var express = require('express');
var router = express.Router();
const models = require('../models');
const checkAuth = require('../auth/checkAuth');
const db = require('../models');


/* GET posts. */
router.get('/', async (req, res) => {
  const threads = await models.Thread.findAll({
    include: [{ model: models.User, attributes: ['username', 'id'] }],
    order: [["createdAt", "DESC"]]
  });

  res.json(threads);
});

// Get posts by user
router.get('/currentuser', async (req, res) => {
  // const { id } = req.params
  const thread = await models.Thread.findAll({
    where: {
      UserId: req.session.user.id
    },
    order: [["createdAt", "DESC"]]
  })
  res.status(201).json(thread)

})

// Get single thread by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const thread = await models.Thread.findByPk(id)
  res.status(201).json(thread)
})

router.post('/', checkAuth, async (req, res) => {
  //   if any fields missing
  if (!req.body.title || !req.body.content) {
    //   send 400 error
    return req.status(400).json({
      error: 'Please include all title and content',
    });
  }

  // create new thread
  const thread = await models.Thread.create({
    title: req.body.title,
    content: req.body.content,
    UserId: req.session.user.id,
  });

  // send back new post data
  res.status(201).json(thread);
});

// edit thread post
router.put('/:id', (req, res) => {
  const { id } = req.params
  db.Thread.findOne({
    where: {
      UserId: req.session.user.id,
      id: id
    }
  })
  .then((thread) => {
    if (!thread) {
      res.status(401).json({
        error: 'Can only edit threads you created'
      })
    } else {
      thread.update({
        title: req.body.title,
        content: req.body.content
      })
      .then((result) => {
        res.status(201).json(result)
      })
    }
  })
})

router.post('/:id/comments', checkAuth, async (req, res) => {
  const thread = await models.Thread.findByPk(req.params.id)
  if (!thread) {
    res.status(404).json({
      error: "Could not find post with that id"
    })
  } 
  const comment = await thread.createComment({
    comment: req.body.comment,
    ThreadId: req.params.id,
    UserId: req.session.user.id,
  });
  res.status(201).json(comment);
})

router.get('/:id/comments', async (req,res) => {
  const thread = await models.Thread.findByPk(req.params.id)
    if(!thread){
      res.status(404).json({
        error: 'Could not find post with that id'
      })
    }

    const comments = await thread.getComments();
    const resObject = await Promise.all(comments.map(async (comment) => {
      const user = await comment.getUser()
      return Object.assign(
        {},
        {
          comment: comment.comment,
          username: user.username,
          createdAt: comment.createdAt
        })
      }))
      res.json(resObject)
    // res.json(users)
    // res.json(comments)
})



module.exports = router;
