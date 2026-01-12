import express from 'express'
import { adminOnly, protect } from '../middleware/authMiddleware.js'
import { exportUsersReport, exprtTaskReport } from '../controllers/reportController.js'

const router = express.Router()

router.get("/export/tasks",protect,adminOnly,exprtTaskReport) //export all task as excel/PDF
router.get("/export/users",protect,adminOnly,exportUsersReport)

export default router