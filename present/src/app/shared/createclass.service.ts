import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Class } from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class CreateclassService {

  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) {}

  // Add class
  addClass(classData: Class) {
    classData.id = this.afs.createId();
    return this.afs.collection('/classes').add(classData); 
  }

  // Get all classes
  getAllClass() {
    return this.afs.collection('/classes').snapshotChanges();
  }

  // Delete class
  deleteClass(classData: Class) {
    return this.afs.doc('/classes/' + classData.id).delete();
  }

  // Update class
  updateClass(classData: Class) {
    return this.afs.doc('/classes/' + classData.id).update(classData);
  }
}
