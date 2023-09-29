
export class AsignaturaDto {
    id!: number;
	nombre!: string;
	fechaRegistro!: Date;
	fechaModificacion!: Date;

    constructor(id: number, nombre: string, fechaRegistro:Date ,fechaModificacion: Date) {
        this.id = id;
        this.nombre = nombre;
        this.fechaRegistro = fechaRegistro;
        this.fechaModificacion = fechaModificacion;
    }
}