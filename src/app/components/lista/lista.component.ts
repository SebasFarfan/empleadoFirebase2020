import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  editarUsuario:any = {apellido:'', nombre:'', correo:'', pais:'', ciudad:''};
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  constructor(private conexion:ConexionService) {     
    this.conexion.getListaUsuario().subscribe(usuario=>{
      this.items = usuario
      console.log(this.items);
    });
    
  }

  ngOnInit(): void {
  }

  eliminar(usuario){
    this.conexion.removeUsuario(usuario);
  }

  editar(usuario){
    this.editarUsuario = usuario;
  }

  agregarUsuarioEditado(){
    this.conexion.updateUsuario(this.editarUsuario);
  }

}
