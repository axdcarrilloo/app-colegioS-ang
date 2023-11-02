import { RolDto } from "./rol-dto";

export class CodigoDto {
    id?: number;
    rol!: RolDto;
    prefijo!: string;
    consecutivo!: string;
    descripcion!: string;
    eliminado?: boolean;
    fechaRegistro?: Date;
	fechaModificacion?: Date;

    constructor(id: number, rol: RolDto, prefijo: string, consecutivo: string, descripcion: string, 
        eliminado: boolean, fechaRegistro: Date, fechaModificacion: Date) {
            this.id = id;
            this.rol = rol;
            this.prefijo = prefijo;
            this.consecutivo = consecutivo;
            this.descripcion = descripcion;
            this.eliminado = eliminado;
            this.fechaRegistro = fechaRegistro;
            this.fechaModificacion = fechaModificacion;

    }

    setRol(rol: RolDto) {
        this.rol = rol;
    }
}