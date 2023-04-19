import Task from "../models/Task";



export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean(); //lean ayuda a mostrar lo que buscas espesificamente en el documento a objecto de javasrcipt, por ejemplo un titulo

  //   console.log(tasks[0]); me  muetra la primera fila

  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save(); //para guardarlo en la base de datos

    res.redirect("/"); //para que me lleve a la pagina inicial
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;
  // camiar a true si esta false
  await task.save();

  res.redirect("/");
};


