const router = require ('express').Router();
const { Product } = require("../../models");

// GET a Product
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    if (!productData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a Product
router.get('/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id);
      if (!productData) {
        res.status(404).json({ message: 'No product with this id!' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // POST a Product
  router.post('/', async (req, res) => {
    try {
      const productData = await Product.create(req.body);
      if (!productData) {
        res.status(404).json({ message: 'No product with this id!' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // UPDATE a Product
  router.put('/:id', async (req, res) => {
    try {
      const productData = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!productData[0]) {
        res.status(404).json({ message: 'No product with this id!' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE a Product
  router.delete('/:id', async (req, res) => {
    try {
      const productData = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!productData) {
        res.status(404).json({ message: 'No product with this id!' });
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;