import { Router, type IRouter } from "express";
import healthRouter from "./health";
import tripsRouter from "./trips";
import inquiriesRouter from "./inquiries";

const router: IRouter = Router();

router.use(healthRouter);
router.use(tripsRouter);
router.use(inquiriesRouter);

export default router;
