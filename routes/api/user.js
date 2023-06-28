const express = require("express");
const userController = require("../../controllers/users");
const { userRegisterSchema, userLoginSchema,verifySchema } = require("../../helpers/schemas");
const { validateBody } = require("../../middleware/bodyCheck");
const { authCheck } = require("../../middleware/authCheck");
const { exceptionWrapper } = require("../../helpers/exceptionWrapper");
const { upload } = require("../../middleware/upload");

const router = express.Router();

router.post(
  "/register",
  validateBody(userRegisterSchema),
  exceptionWrapper(userController.register)
);
router.get("/verify/:verificationCode", 
exceptionWrapper(userController.verifyEmail));

router.post("/verify", 
validateBody(verifySchema), 
exceptionWrapper(userController.resendEmail));

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
router.patch(
  "/avatars",
  authCheck,
  upload.single("avatar"),
  exceptionWrapper(userController.updateAvatar)
);
module.exports = router;