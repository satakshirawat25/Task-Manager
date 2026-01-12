import express from 'express'
import { createTask, deleteTask, getDashboardData, getTasks, getTasksById, getUserDashboardData, updateTask, updateTaskCheckList, updateTaskStatus } from '../controllers/taskController.js'
import { adminOnly, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//Task maagement routes

router.get("/dashboard-data",protect,getDashboardData)
router.get("/user-dashboard-data",protect,getUserDashboardData)
router.get("/",protect,getTasks)
router.get("/:id",protect,getTasksById)
router.post("/",protect,adminOnly,createTask)
router.put("/:id",protect,updateTask)
router.delete("/:id",protect,adminOnly,deleteTask)
router.put("/:id/status",protect,updateTaskStatus)
router.put("/:id/todo",protect,updateTaskCheckList)

export default router