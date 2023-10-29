export class UsuarioRegistrar {
    tipoUsuario!: string;
	tipoDocumento!: string;
	numeroDocumento!: string;
	nombres!: string;
	apellidos!: string;
	celular!: string;
	direccion!: string;
    edad!: number;
    email!: string;
	usuario!: string;
	contrasenna!: string;

    constructor(tipoUsuario: string, tipoDocumento: string, numeroDocumento: string, nombres: string, apellidos: string, celular: string,
        direccion: string, edad: number, email: string, usuario: string, contrasenna: string) {

        this.tipoUsuario = tipoUsuario;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.celular = celular;
        this.direccion = direccion;
        this.edad = edad;
        this.email = email;
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }
}