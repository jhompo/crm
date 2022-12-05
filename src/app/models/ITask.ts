import { IContact } from "./IContact";

export interface ITask{
  id?:number, //BigInteger,
  id_contact:number,
  tarea:string,
  contacts:IContact,
  responsable:string,
  created_at:Date,
}
