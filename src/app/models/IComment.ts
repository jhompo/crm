import { IContact } from "./IContact";

export interface IComment{
  id?:number, //BigInteger,
  id_contact:number,
  comentario:string,
  contacts?:IContact,
  created_at:Date,
}
