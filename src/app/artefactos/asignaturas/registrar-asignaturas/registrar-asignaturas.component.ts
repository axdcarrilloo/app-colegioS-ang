import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta } from 'src/app/dtos/respuesta';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'registrar-asignaturas',
  templateUrl: './registrar-asignaturas.component.html',
  styleUrls: ['./registrar-asignaturas.component.scss']
})
export class RegistrarAsignaturasComponent implements OnInit {

  asignaturaForm!: FormGroup;

  constructor(private fb: FormBuilder, private asignaturaSvc: AsignaturasService) {}

  ngOnInit(): void {
    this.asignaturaForm = this.cargarFormulario();
  }

  registrar(): void {
    let asignaturaRegistrar = this.asignaturaForm.value;
    this.asignaturaSvc.registrar(asignaturaRegistrar).subscribe((data: Respuesta) => {
      if(data != null) {
        console.log(data);
        this.asignaturaForm.reset();
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['',  [Validators.required]],
    });
  }

}
