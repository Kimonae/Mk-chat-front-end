export class Tchatroom {

  id !: number;
  name !: string;
  CreationDate !: string;



constructor(obj ?: Partial<Tchatroom>) {

  if(obj) {

    Object.assign(this, obj);
  }
}

}
