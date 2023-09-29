export class Respuesta {
    mensaje?: string;
    response?: any;

    constructor(mensaje: string, response: any) {
        this.mensaje = mensaje;
        this.response = response;
    }
}