import { Component, OnInit } from '@angular/core';
import { ConexionService, Usuario } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  usuario:any= {apellido:'', nombre:'', correo:'', pais:'', ciudad:''};

  constructor(private servicio:ConexionService) { 

  }
  
  ngOnInit(): void {
  }

  agregar(){
    this.servicio.addUsuario(this.usuario);
    this.limpiar();
    
  }

  limpiar(){
    this.usuario.apellido='';
    this.usuario.nombre='';
    this.usuario.correo = '';
    this.usuario.pais = '';
    this.usuario.ciudad = '';
  }

}
