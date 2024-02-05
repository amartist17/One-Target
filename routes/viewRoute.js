const express = require("express");
const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')
const apiController = require('../controllers/apiController')
const router = express.Router({ mergeParams: true });

router.use(authController.isLoggedIn);
router.use(apiController.aggregate);

router.get("/", viewController.home);
router.get("/login", viewController.login);
router.get("/dashboard", authController.protect, authController.restrictTo('admin'), viewController.dashboard);
router.get("/dashboard/add-course", authController.protect, authController.restrictTo('admin'), viewController.addCourse);
router.get("/dashboard/add-event", authController.protect, authController.restrictTo('admin'), viewController.addEvent);



module.exports = router;
