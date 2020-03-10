import express from 'express';
import controller from '../Controllers/ProjectController'

let router = express.Router();

router.get('/home', controller.home);
router.get('/cesde', controller.cesde);
router.get('/data', controller.data);
router.post('/alumnos',controller.alumnos);
router.post('/docentes',controller.docentes);


module.exports = router;