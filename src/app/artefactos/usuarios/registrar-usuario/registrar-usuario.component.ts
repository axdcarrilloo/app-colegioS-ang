import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Respuesta } from 'src/app/dtos/respuesta';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  tipoUsuario!: string;
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private usuarioSvc: UsuariosService) {
  }

  ngOnInit(): void {
    this.tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario') || '';
    this.usuarioForm = this.cargarFormulario();
  }

  registrar() {
    let usuarioRegistrar = this.usuarioForm.value;
    this.usuarioSvc.registrar(usuarioRegistrar).subscribe((data: Respuesta) => {
      if(data != null) {
        console.log(data.mensaje);
        this.usuarioForm.reset();
      }
    }, (error: HttpErrorResponse) => {
      console.log(usuarioRegistrar);
      console.log(error.error.response);
    });
  }

  cargarFormulario(): FormGroup {
    let tipoDocumento = '';
    if(this.tipoUsuario != '01') {
      tipoDocumento = '01';
    } else {
      tipoDocumento = '02';
    }
    return this.fb.group({
      tipoUsuario: [this.tipoUsuario,  [Validators.required]],
      tipoDocumento: [tipoDocumento,  [Validators.required]],
      numeroDocumento: ['',  [Validators.required]],
      nombres: ['',  [Validators.required]],
      apellidos: ['',  [Validators.required]],
      celular: ['',  [Validators.required]],
      direccion: ['',  [Validators.required]],
      usuario: ['',  [Validators.required]],
      contrasenna: ['',  [Validators.required]]
    });
  }
}
