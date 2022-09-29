export class Message {
  id !: number;
  text !: string;
  dateMessage !: string;
  idUser !: number;
  idRoom !: number;

  constructor(obj ?: Partial<Message>){
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
