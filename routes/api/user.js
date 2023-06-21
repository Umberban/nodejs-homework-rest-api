const express = require("express");
const userController = require("../../controllers/users");
const { userRegisterSchema, userLoginSchema } = require("../../helpers/schemas");
const { validateBody } = require("../../middleware/bodyCheck");
const { authCheck } = require("../../middleware/authCheck");
const { exceptionWrapper } = require("../../helpers/exceptionWrapper");

const router = express.Router();

router.post(
  "/register",
  validateBody(userRegisterSchema),
  exceptionWrapper(userController.register)
);
router.post(
  "/login",
  validateBody(userLoginSchema),
  exceptionWrapper(userController.login)
);
router.post(
  "/logout",
  authCheck,
  exceptionWrapper(userController.logout)
);
router.get(
  "/current",
  authCheck,
  exceptionWrapper(userController.currentUser)
);

module.exports = router;