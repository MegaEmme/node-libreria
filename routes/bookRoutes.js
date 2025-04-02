const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers');
const validateBook = require('../middlewares/validateBook');

router.get('/', bookControllers.index);
router.get('/:id', bookControllers.show);
router.post('/', validateBook, bookControllers.store);
router.put('/:id', validateBook, bookControllers.update);
router.delete('/:id', bookControllers.destroy);

router.use(validateBook);

module.exports = router;