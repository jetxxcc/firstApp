import { Schema, model } from "mongoose";

// model un nombre de propediades de la tabla
// schema es los campos donde voy a guardar

//  schema{
//     model
//     model
//     model
// }

const taskSchema = new Schema(
  {
    title: {
        type: String,
        required: true, //para el requerido es obligatorio true
        unique: true, //datos duplicados
        trim: true //trim ayuda a los espacios del titulo del final
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true, //esto es updateat y createat
    versionKey: false
  }
);



export default model("task", taskSchema);
