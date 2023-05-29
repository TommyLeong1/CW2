const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

router.get('/', catController.getAllCats);
router.get('/:id', catController.getCatById);

router.post('/', authMiddleware, uploadMiddleware.single('photo'), catController.createCat);

router.put('/:id', authMiddleware, uploadMiddleware.single('photo'), catController.updateCat);

router.delete('/:id', authMiddleware, catController.deleteCat);

module.exports = router;