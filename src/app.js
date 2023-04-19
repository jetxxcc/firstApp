// import express from 'express' // otra opcion
const express = require("express");
import indexRoutes from "./routes/index.routes";
import exphbs from "express-handlebars";
import {create} from 'express-handlebars'
import path from "path";
import morgan from 'morgan'
// inizialiazation

const app = express();

app.set("views", path.join(__dirname, "views"));
// aqui combirtiendolo en una funcion el exphbs
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  });
app.engine('hbs', hbs.engine)
app.set("view engine", ".hbs");

// middLewares
app.use(morgan('dev')) // morgan ayuda a ver que acciones se realizan en la pagina, si get, post put etc...
app.use(express.urlencoded({extended: false}))
// routes
app.use(indexRoutes);

export default app;
