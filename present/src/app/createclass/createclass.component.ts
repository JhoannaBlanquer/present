import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../shared/auth.service';
import { CreateclassService } from '../shared/createclass.service';
import { Class } from '../model/class';

@Component({
  selector: 'app-createclass',
  standalone: false,
  
  templateUrl: './createclass.component.html',
  styleUrl: './createclass.component.css'
})

export class CreateclassComponent implements OnInit {

  classList : Class[] = [];
  dataClassObj : Class = {
    id: '',
    className: '',
    section: '',
    subject: '',
    room: '',
    schedule: '',
    DateStart: '',
    DateEnd: ''
  };
  id : string = '';
    className : string = '';
    section : string = '';
    subject : string = '';
    room : string = '';
    schedule : string = '';
    DateStart : string = '';
    DateEnd : string = '';

  constructor(private auth : AuthService, private data : CreateclassService) {}

  ngOnInit(): void {
    
  }

  getAllClass() {

    this.data.getAllClass().subscribe(res => {

      this.classList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching class data');
    })

  }

  resetForm() {
    this.id = '';
    this.className = '';
    this.section = '';
    this.room = '';
    this.schedule = '';
    this.DateEnd= '';
    this.DateStart = '';
    this.subject = '';
  }

  addClass() {
    if (!this.className || !this.section || !this.room || !this.DateEnd || !this.DateStart || !this.subject || !this.schedule) {
      alert('Fill all input fields');
      return;
    }
  
    const newClass: Class = {
      id: '', // Firestore will generate this
      className: this.className,
      section: this.section,
      subject: this.subject,
      room: this.room,
      schedule: this.schedule,
      DateStart: this.DateStart,
      DateEnd: this.DateEnd
    };
  
    console.log('Attempting to add class:', newClass); // Debugging
  
    this.data.addClass(newClass)
      .then(() => {
        alert('Class Added Successfully');
        this.resetForm();
      })
      .catch(error => {
        console.error('Error adding class:', error);
        alert('Error adding class: ' + error.message);
      });
  }

  updateClass() {

  }

  deleteClass(dataClass: Class) {
    if (window.confirm('Are you sure you want to delete ' + dataClass.className+ ' ' + dataClass.subject+ ' ?')) {
      this.data.deleteClass(dataClass);
    }
  }
}
