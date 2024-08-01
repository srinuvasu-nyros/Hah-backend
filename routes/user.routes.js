const express = require('express');
const organization_controller = require('../controllers/api/organization_controller.js');
// const { auth_check } = require('../middleware/auth_middleware.js');
const router = express.Router();
const Organization = require('../models/organization.js')
const church = require('../models/church.js')
const churches_controller = require('../controllers/api/churches_controller.js')



// organization routes

router.post('/organizations', organization_controller.createOrganization); // create organization
router.get('/organizations/:id', organization_controller.getOrganization);  // get organizations by id
router.get('/organizations', organization_controller.getOrganizations);  // get all  organizations
router.put('/organizations/:id', organization_controller.updateOrganization); // update organization
router.delete('/organizations/:id', organization_controller.deleteOrganization); // delete organization


// Routes for Church operations
router.post('/churches', churches_controller.createChurch);  // create church
router.get('/churches', churches_controller.getAllChurches); // get all churches
router.get('/churches/:id', churches_controller.getChurchById);  // get all  churches


module.exports = router;
