// login,register,logout,userProfile
import express from 'express'
import { handleLogin, handleRegister,handlelogout,handleadmin } from '../controller/authController.js';
import userMiddleware from '../middleware/userMiddleware.js';

const router=express.Router();

router.post("/register",handleRegister);
router.post("/login",handleLogin);
router.post("/logout",userMiddleware,handlelogout);
router.post("/admin/register",userMiddleware,handleadmin);

export default router;