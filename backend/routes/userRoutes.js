import express from "express";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import {  getUserById, getUsers } from "../controllers/userController.js";


const router= express.Router()

//user management routes
router.get("/",protect,adminOnly,getUsers)//get all user admin only
router.get("/:id",protect,getUserById,)
// router.get("/",protect,adminOnly,adminOnly,deleteUser)

export default router

