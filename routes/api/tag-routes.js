const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags
    Tag.findAll({
        // be sure to include its associated Product data
        include: [{ model: Product }]
    })
        .then((tags) => res.json(tags))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    Tag.findOne({
        where: {
            id: req.params.id
        },
        include: [{ model: Product }]
    })
        .then((tag) => res.json(tag))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body)
        .then((tag) => res.json(tag))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update(req.body, {
        where: {
            id: req.params.id
        }
    })

        .then((tag) => {
            res.json(tag); 
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err); 
        });
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.status(204).end(); // Respond with a success status code
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err); // Respond with an error if deletion fails
      });
});

module.exports = router;