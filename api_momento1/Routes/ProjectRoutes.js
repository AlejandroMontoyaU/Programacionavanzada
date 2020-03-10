import express from 'express';
import controller from '../Controllers/ProjectController'

let router = express.Router();

router.post('/home', controller.home);
router.post('/docentes',controller.docentes);


module.exports = router;