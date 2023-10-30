import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RolService } from 'src/app/servicios/rol.service';
import { Constantes } from 'src/app/utils/constantes';
import { Respuesta } from 'src/app/dtos/respuesta';

@Component({
  selector: 'pestannas',
  templateUrl: './pestannas.component.html',
  styleUrls: ['./pestannas.component.scss']
})
export class PestannasComponent implements OnInit {

  @Input() opcion? = '';
  rolForm!: FormGroup;
  codigoForm!: FormGroup;

  constructor(private fb: FormBuilder, private rolSvc: RolService) {}

  ngOnInit(): void {
    if(this.opcion == Constantes.opcionRol) {
      this.rolForm = this.cargarFormularioRol();
    } else if(this.opcion == Constantes.opcionCodigo) {
      console.log('Cargar formulario de Codigo');
      
    }
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
