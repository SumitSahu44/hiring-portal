const express=require('express');
const router=express.Router();
const companyController=require('../controllers/companyController');

// all company specific routes here 
router.post('/company',companyController.postCompany);
router.get('/company',companyController.getCompany);
router.get('/companies/:id',companyController.getCompanies);

module.exports=router;
