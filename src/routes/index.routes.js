import { Router } from "express";



import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
  taskImage,
} from "../controllers/tasks.controllers";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone/", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit); //visualizacion de los datos cuando lo vas a editar

router.post("/tasks/:id/edit", editTask); //buscar id y actualizar el dato

router.get("/tasks/:id/delete", deleteTask);

router.get("/about", (req, res) => {
    res.render("about");
  });



export default router;
