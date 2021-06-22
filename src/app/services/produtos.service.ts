import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Produtos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  productCollection: AngularFirestoreCollection<Produtos>;

  constructor(
    private af: AngularFirestore
  ) {
    this.productCollection = this.af.collection<Produtos>('Produtos');
   }

   getAllProducts(){
     return this.productCollection.snapshotChanges().pipe(
      map (actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
     )
   }


}
