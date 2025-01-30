import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { CreateclassService } from '../shared/createclass.service';
import { Class } from '../model/class';



@Component({
  selector: 'app-createclass',
  templateUrl: './createclass.component.html',
  styleUrls: ['./createclass.component.css'] 
})
export class CreateClassComponent implements OnInit { 

  classList: Class[] = []; 
  classObj: Class = { 
    id: '',
    className: '',
    section: '',  // ✅ Changed to lowercase (consistent with Firestore)
    room: '',
    subject: '',
    schedule: '',
    dayS: '',
    dayE: ''
  };

  className: string = '';
  section: string = '';
  subject: string = '';
  room: string = '';
  schedule: string = '';
  dayS: string = '';
  dayE: string = '';
  id: string = '';

  constructor(private auth :AuthService, private data : CreateclassService) {}

  ngOnInit(): void {
    this.getAllClass();
  }

  getAllClass() {
    this.data.getAllClass().subscribe(res => { // ✅ Fixed method name
      this.classList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    }, err => {
      alert('Error while fetching class data');
    });
  }

  resetForm() {
    this.id = '';
    this.className = '';
    this.section = '';
    this.room = '';
    this.subject = '';
    this.schedule = '';
    this.dayS = '';
    this.dayE = '';
  }

  addClass() {
    if (!this.className || !this.section || !this.room || !this.subject || !this.schedule || !this.dayS || !this.dayE) {
      alert('Fill all input fields');
      return;
    }

    this.classObj.id = ''; // Firestore will auto-generate an ID
    this.classObj.className = this.className;
    this.classObj.section = this.section;
    this.classObj.room = this.room;
    this.classObj.subject = this.subject;
    this.classObj.schedule = this.schedule;
    this.classObj.dayS = this.dayS;
    this.classObj.dayE = this.dayE;

    this.data.addClass(this.classObj); // ✅ Fixed method name
    this.resetForm();
  }

  updateClass() {
    // You can implement update functionality here
  }

  deleteClass(classData : Class) { // ✅ Fixed variable name
    if (window.confirm(`Are you sure you want to delete ${classData.className} ${classData.section}?`)) {
      this.data.deleteClass(classData); // ✅ Fixed method name
    }
  }
}
