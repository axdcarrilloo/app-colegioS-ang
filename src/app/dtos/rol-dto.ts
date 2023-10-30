export class Rol {
    id?: number;
    codigo?: string;
    nombre?: string;
    eliminado?: boolean;
    fechaRegistro?: Date;
    fechaModificacion?: Date;

    constructor(id: number, codigo: string, nombre: string, eliminado: boolean, fechaRegistro: Date, fechaModificacion: Date) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.eliminado = eliminado;
        this.fechaRegistro = fechaRegistro;
        this.fechaModificacion = fechaModificacion;
    }
}