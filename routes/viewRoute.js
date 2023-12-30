const express = require("express");
const viewController = require('../controllers/viewController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.get("/files", viewController.files);
router.get("/contact", viewController.contact);
router.get("/login", viewController.login);
router.get("/dashboard", viewController.addFile);
router.get("/dashboard/add-user", viewController.addUser);
router.get("/dashboard", viewController.addFolder);


module.exports = router;
