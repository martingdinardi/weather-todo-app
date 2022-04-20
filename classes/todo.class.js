export class Todo {
  constructor(tarea_titulo, tarea_description, tarea_icono) {
    this.tarea_titulo = tarea_titulo;
    this.tarea_description = tarea_description;
    this.tarea_icono = tarea_icono;
    /* this.tarea_time = tarea_time; */
    this.id = new Date().getTime();
    this.completado = false;
  }
}
