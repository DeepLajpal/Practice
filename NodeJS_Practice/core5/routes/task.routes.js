import express from "express";
import { body, validationResult } from "express-validator";
import taskController from "../controllers/task.controller.js";

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors.isEmpty()", errors.isEmpty());
    console.log(errors);
    return res.status(400).json({
      success: false,
      message: "validation failed",
      data: null,
      errors: errors.array(),
    });
  }
  next();
};
const router = express.Router();

router.get("/tasks", taskController.getTasks);

//2nd arg attaches error to the req obj if any
router.post(
  "/tasks",
  body("title").notEmpty().withMessage("Title is required"),
  errorHandler,
  taskController.createTask
);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);
export default router;
