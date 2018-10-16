export class Publicacion {
  public titulo:       string  = '';
  public direccion:    string  = '';
  public capacidad:    number  = 0;
  public dormitorios:  number  = 0;
  public cochera:      number  = 0;
  public piscina:      boolean = false;
  public mascota:      boolean = false;
  public seguridad:    boolean = false;
  public lavarropas:   boolean = false;
  public valor_dia:    number = 0;
  public valor_mes:    number = 0;
  public valor_semana: number = 0;
  public imgs:         any    = [];
  public texto:        string = '';
  public ambientes_c:  number = 0;
  public banios:       number = 0;
  public expensas:     number = 0;
  public disposicion:  number = 0;
  public equipamiento: any    = [];
  public moneda:       number = 1;
  public precio:       number = 0;

  public piso: string = '';
  public dpto: string = '';
  public calle1: string = '';
  public calle2: string = '';

  public tipo_propiedad_id:  number = 1;
  public tipo_operacion_id:  number = 0;
  public superficie_cubierta:number = 0;
  public superficie_total:   number  = 0;

  public ambientes:    any = [];
  public servicios:    any = [];
  public carac_gral:   any = [];
  public carac_gral_e: any = [];

  public destacado:    boolean = false;
  
  public tipo_plan:       number = -1;
  public id:              number = -1;
  public propietario_id:  number = -1;
  public inmobiliaria_id: number = -1;

  public zona_id:number    = -1;
  public zona:any          = [];
  public zona_nivel:number = 1;

  constructor() {}

  public errors:string = '';

  formValid(){
    if (this.titulo     == '') { this.errors = 'El campo título es obligatorio'; return false; }
    if (this.direccion  == '') { this.errors = 'El campo dirección es obligatorio'; return false; }
    if (this.moneda     == 0)  { this.errors = 'El campo moneda es obligatorio'; return false; }
    
    if ((this.tipo_operacion_id == 1 || this.tipo_operacion_id == 2) 
         && (this.valor_dia == 0 || this.valor_mes == 0 || this.valor_semana == 0) )  { 
            this.errors = 'Es necesario completar el precio'; return false; }

    if (this.tipo_operacion_id == 0 && this.precio == 0){
      this.errors = 'Es necesario completar el precio'; return false;
    }

    if (this.texto == '')  { this.errors = 'Es necesario especificar una descripción'; return false; }
    
    return true;
  }
}