import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RolService } from 'src/app/servicios/rol.service';
import { Constantes } from 'src/app/utils/constantes';
import { Respuesta } from 'src/app/dtos/respuesta';
import { RolDto } from 'src/app/dtos/rol-dto';
import { CodigoDto } from 'src/app/dtos/codigo-dto';
import { CodigoService } from 'src/app/servicios/codigo.service';
import { CodigoRegistrarDto } from 'src/app/dtos/codigo-registrar-dto';

declare var window: any;

@Component({
  selector: 'pestannas',
  templateUrl: './pestannas.component.html',
  styleUrls: ['./pestannas.component.scss']
})
export class PestannasComponent implements OnInit {

  @Input() opcion? = '';
  rolForm!: FormGroup;
  opcionRol = Constantes.opcionRol;
  roles?: RolDto[] = [];

  codigoForm!: FormGroup;
  opcionCodigo = Constantes.opcionCodigo;
  codigos?: CodigoDto[] = [];

// Modales de alertas
  infoModalRegistroFallidoSiExistencia: string[] = Constantes.infoModalRegistroFallidoSiExistencia;
  modalRegistroFallidoSiExistencia!: any;
  infoModalServidorCaido: string[] = Constantes.infoModalServidorHorarioCaido;
  modalErrorServidorCaido!: any;
  infoModalRegistroExitoso: string[] = Constantes.infoModalRegistroExitoso;
  modalRegistroExitoso!: any;

  constructor(private fb: FormBuilder, private rolSvc: RolService, private codigoSvc: CodigoService) {}

  ngOnInit(): void {
    this.cargarModals();
    if(this.opcion == Constantes.opcionRol) {
      this.rolForm = this.cargarFormularioRol();
    } else if(this.opcion == Constantes.opcionCodigo) {
      this.consultarTodosRoles();
      this.codigoForm = this.cargarFormularioCodigo();
    }
  }

  consultarRolPorId(id: number): void {
    this.rolSvc.consultarPorId(id).subscribe((data: Respuesta) => {
      console.log(data.response);
    },
    (data: HttpErrorResponse) => {
      // console.log(data.error.response);
      if(data.status == 504) {
        this.modalErrorServidorCaido.show();
      }
    });
  }

  registrarCodigo(): void {
    let codigoFormValue = this.codigoForm.value;
    let rolGuardarCodigo: RolDto = {};
    rolGuardarCodigo.id = codigoFormValue.rol;

    let codigoRegistrar: CodigoRegistrarDto = new CodigoRegistrarDto(rolGuardarCodigo, 
      codigoFormValue.prefijo, codigoFormValue.descripcion);    
    this.codigoSvc.registrar(codigoRegistrar).subscribe((data: Respuesta) => {
      if(data != null) {
        console.log(data);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.cargarFormularioCodigo();
  }

  cargarFormularioCodigo(): FormGroup {
    return this.fb.group({
      rol: ['00',  [Validators.required]],
      prefijo: ['',  [Validators.required]],
      descripcion: ['',  [Validators.required]]
    });
  }

  consultarTodosCodigos(): void {
    this.codigoSvc.consultarTodos().subscribe((data: Respuesta) => {
      this.codigos = data.response;
      // console.log(this.asignaturas);
    },
    (data: HttpErrorResponse) => {
      // console.log(data.error.response);
      if(data.status == 504) {
        this.modalErrorServidorCaido.show();
      }
    });
  }

  mostrar(): void {
    if(this.opcion == Constantes.opcionRol) {           
      this.consultarTodosRoles();
    } else if(this.opcion == Constantes.opcionCodigo) {
      this.consultarTodosCodigos();
    }
  }

  cargarModals(): void {
    this.modalRegistroFallidoSiExistencia = new window.bootstrap.Modal(
      document.getElementById("modalRegistroFallidoSiExistencia")
    );
    this.modalErrorServidorCaido = new window.bootstrap.Modal(
      document.getElementById("modalErrorServidorCaido")
    );
    this.modalRegistroExitoso = new window.bootstrap.Modal(
      document.getElementById("modalRegistroExitoso")
    );
  }

  consultarTodosRoles(): void {
    this.rolSvc.consultarTodos().subscribe((data: Respuesta) => {
      this.roles = data.response;
      // console.log(this.roles);
    },
    (data: HttpErrorResponse) => {
      // console.log(data.error.response);
      if(data.status == 504) {
        this.modalErrorServidorCaido.show();
      }
    });
  }

  registrarRol(): void {
    let rolRegistrar = this.rolForm.value;
    this.rolSvc.registrar(rolRegistrar).subscribe((data: Respuesta) => {
      if(data != null) {
        console.log(data);
        this.modalRegistroExitoso.show();
      }
    }, (data: HttpErrorResponse) => {
      // console.log(data.error);
      if(data.status == 400 && data.error.response == this.infoModalRegistroFallidoSiExistencia[2]) {
        this.modalRegistroFallidoSiExistencia.show();
      }
    });
    this.rolForm.reset();
  }

  cargarFormularioRol(): FormGroup {
    return this.fb.group({
      codigo: ['',  [Validators.required]],
      nombre: ['',  [Validators.required]]
    });
  }

}
