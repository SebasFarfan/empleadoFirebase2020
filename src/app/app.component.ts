import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  faTrash = faTrash;
  

  items:Observable<any[]>;
  constructor(firestone:AngularFirestore){
    this.items = firestone.collection('usuarios').valueChanges();
  }
}
