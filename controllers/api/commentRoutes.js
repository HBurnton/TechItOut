const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (res, res) => {
  try {
    const comments = await Comment.findAll({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json('Comment Not Found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
