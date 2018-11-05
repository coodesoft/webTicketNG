export class Publicacion {
  public id: number         = -1;
  public title: string      = '';
  public img: string        = '';
  public imgPortada: string = '';
  public releaseDate:Date;
  public duration:number    = 0;

  public categorys:any = [];
  public writers:any   = [];
  public actors:any    = [];

  public director:string       = '';
  public ageRestriction:number = 0;

  public argumento:string = '';
}
