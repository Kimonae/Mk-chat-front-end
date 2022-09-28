export class Tchatroom {

  id !: number;
  name !: string;
  CreationDate !: Date;



constructor(obj ?: Partial<Tchatroom>) {

  if(obj) {

    Object.assign(this, obj);
  }
}

}
