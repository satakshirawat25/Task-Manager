import express from 'express'

const router = express.Router()

//Task maagement routes

router.get("/dashboard-data",protect,getDashboardData)
router.get("/user-dashboard-data",protect,getUserDashboardData)
router.get("/",protect,getTasks)
router.get("/:id",protect,getTasksByID)
router.get("/",protect,adminOnly,createTask)
router.get("/:id",protect,updateTask)
router.get("/:id",protect,adminOnly.deleteTask)
router.get("/:id/status",protect,updateTaskStatus,)
router.get("/:id/todo",protect,updateTaskCheckList)

export default router