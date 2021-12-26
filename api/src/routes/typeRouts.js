const { Router } = require('express');
const router = Router();

const {

    pokemonsType

} = require('../controllers/typeController');

router.get('/', pokemonsType);

module.exports = router;
