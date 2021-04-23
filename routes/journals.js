var express = require('express');
const checkAuth = require('../auth/checkAuth');
var router = express.Router();
const models = require('../models')


// /* GET journal entries. */
// router.get('/entries', checkAuth, async function(req, res, next) {

//   const journalEntries = await models.Journal.findAll({
//       include: [{
//           model: models.User, 
//           attributes: ['username', 'id']
//       }],
//   })

//   res.json(journalEntries)
// });

//GET journal entries by current user
router.get('/currentuser', async (req, res) => {
  // const { id } = req.params
  const entry = await models.Journal.findAll({
      where: {
          UserId: req.session.user.id
      },
      order: [["createdAt", "DESC"]]
  }) 
  res.status(201).json(entry)

})

// post new entry
router.post('/', checkAuth, async (req,res) => {
  // check if user is logged in
  const { user } = req.session;
  // if not logged in, send 401 error
  if (!user) {
      return res.status(401).json({
          error: 'Not logged in.'
      })
  }

  // check to make sure all fields are filled
  if ((!req.body.description || !req.body.content)) {
      // if missing field, send 400 error (unacceptable)
      return res.status(400).json({
          error: 'Please fill out all fields.'
      })
  }

  // create new journal entry
  const journalEntry = await models.Journal.create({
      description: req.body.description,
      content: req.body.content,
      mood: req.body.mood,
      UserId: req.session.user.id
  })
      // send back new post data
      res.status(201).json(journalEntry)
})

// UPDATE ENTRY
router.put('/:id', (req,res)=>{
  if (!req.body.description || !req.body.content) {
    res.status(400).json({
      error: 'Enter all fields',
    });
    return;
  }
  models.Journal.update({
    description: req.body.description,
    content: req.body.content,
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(updated => {
    if(updated && updated[0] === 1){
      res.status(202).json({
        success: 'Post Updated'
      })

    } else {
      res.status(404).json({
        error: 'Post not found'
      })
    }
  })
})

module.exports = router;



