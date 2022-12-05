import { IComment } from "./IComment";
import { ITask } from "./ITask";

export interface IContact{
  id?:number, //BigInteger,
  nombre:string,
  apellidos:string,
  email:string,
  telefono:string,
  genero:string,
  fecha_nacimiento:Date,
  direccion:string,
  id_tipo:number,
  id_origen:number,
  tasks?:ITask,
  comentarios?:IComment,
}
