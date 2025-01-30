import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Class } from '../model/class';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CreateclassService {

  constructor(private afs : AngularFirestore, private router : Router) { }

  addClass(dataClass: Class) {
    dataClass.id = this.afs.createId(); // Generate unique Firestore ID
    return this.afs.collection('/dataClass').doc(dataClass.id).set(dataClass);
  }
  

  // get all dataClass
  getAllClass() {
    return this.afs.collection('/dataClass').snapshotChanges();
  }

  // delete dataClass
  deleteClass(dataClass : Class) {
     this.afs.doc('/dataClass/'+dataClass.id).delete();
  }

  // update dataClass
  updateClass(dataClass : Class) {
    this.deleteClass(dataClass);
    this.addClass(dataClass);
  }
}
