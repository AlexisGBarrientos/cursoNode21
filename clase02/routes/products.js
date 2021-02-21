const { Router } = require('express');
const router = Router();
const { allProduct, findProduct, createProduct } = require('./../Controllers/productsController')

router.get('/', allProduct);
router.get('/:id', findProduct);
router.post('/', createProduct);
//router.put('/', updateProduct);
//router.delete('/', deleteProduct);

module.exports = router;
