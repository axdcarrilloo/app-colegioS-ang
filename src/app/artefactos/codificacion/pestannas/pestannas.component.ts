import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RolService } from 'src/app/servicios/rol.service';
import { Constantes } from 'src/app/utils/constantes';
import { Respuesta } from 'src/app/dtos/respuesta';
import { RolDto } from 'src/app/dtos/rol-dto';
import { CodigoDto } from 'src/app/dtos/codigo-dto';
import { CodigoService } from 'src/app/servicios/codigo.service';

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

  infoModalServidorCaido: string[] = Constantes.infoModalServidorHorarioCaido;
  modalErrorServidorCaido!: any;

  constructor(private fb: FormBuilder, private rolSvc: RolService, private codigoSvc: CodigoService) {}

  ngOnInit(): void {
    if(this.opcion == Constantes.opcionRol) {
      this.rolForm = this.cargarFormularioRol();
    } else if(this.opcion == Constantes.opcionCodigo) {
      this.consultarTodosRoles();
      this.codigoForm = this.cargarFormularioCodigo();
    }
  }

  registrarCodigo(): void {
    let codigoRegistrar = this.codigoForm.value;
    this.codigoSvc.registrar(codigoRegistrar).subscribe((data: Respuesta) => {
      if(data != null) {
        console.log(data);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.codigoForm.reset();
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
    this.modalErrorServidorCaido = new window.bootstrap.Modal(
      document.getElementById("modalErrorServidorCaido")
    );
  }

  consultarTodosRoles(): void {
    this.rolSvc.consultarTodos().subscribe((data: Respuesta) => {
      this.roles = data.response;
      // console.log(this.asignaturas);
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
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
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
