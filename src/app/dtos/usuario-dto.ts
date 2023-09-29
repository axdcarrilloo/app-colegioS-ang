export class Usuario {
    id?: number;
    codigo?: string;
	tipoUsuario?: string;
	tipoDocumento?: string;
	numeroDocumento?: string;
	nombres?: string;
	apellidos?: string;
	celular?: string;
	direccion?: string;
	usuario?: string;
	contrasenna?: string;
	eliminado?: boolean;
    fechaRegistro?: Date;
	fechaModificacion?: Date;

    constructor(id: number, codigo: string, tipoUsuario: string, tipoDocumento: string, numeroDocumento: string, nombres: string, 
        apellidos: string, celular: string, direccion: string, usuario: string, contrasenna: string, eliminado: boolean, 
        fechaRegistro: Date, fechaModificacion: Date) {
            this.id = id;
            this.codigo = codigo;
            this.tipoUsuario = tipoUsuario;
            this.tipoDocumento = tipoDocumento;
            this.numeroDocumento = numeroDocumento;
            this.nombres = nombres;
            this.apellidos = apellidos;
            this.celular = celular;
            this.direccion = direccion;
            this.usuario = usuario;
            this.contrasenna = contrasenna;
            this.eliminado = eliminado;
            this.fechaRegistro = fechaRegistro;
            this.fechaModificacion = fechaModificacion;
    }
}