import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Usuario { nombre:string; apellido:string; email:string; pais:string; ciudad:string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Usuario>;
  items: Observable<Usuario[]>;
  private itemDoc: AngularFirestoreDocument<Usuario>;


  constructor(private afs:AngularFirestore) { 
    this.itemsCollection = afs.collection<Usuario>('usuarios');
    // this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getListaUsuario(){
    return this.items;
  }

  addUsuario(usuario:Usuario){
    this.itemsCollection.add(usuario);
  }

  removeUsuario(usuario){

    this.itemDoc = this.afs.doc<Usuario>(`usuarios/${usuario.id}`); 
    this.itemDoc.delete();
  }

  updateUsuario(usuario){
    this.itemDoc = this.afs.doc<Usuario>(`usuarios/${usuario.id}`);
    this.itemDoc.update(usuario);
  }
}
