const router = require ('express').Router();
const { Category, Product } = require("../../models");


// GET a Category
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [Product],
      });
      if (!categoryData) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
    // Category.findAll({
    //   include: [Product],
    // })
    // .then((categories) => res.json(categories))
    // .catch((err) => res.status(500).json(err))
  });
  
  // UPDATE a Category
  router.put('/:id', async (req, res) => {
    try {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE a Category
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;