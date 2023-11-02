import { RolDto } from "./rol-dto";

export class CodigoRegistrarDto {
    rol?: RolDto;
    prefijo?: string;
    descripcion?: string;

    constructor (rol: RolDto, prefijo: string, descripcion: string) {
        this.rol = rol;
        this.prefijo = prefijo;
        this.descripcion = descripcion;
    }
}