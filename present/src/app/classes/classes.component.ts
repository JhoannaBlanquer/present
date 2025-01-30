import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { CreateclassService } from '../shared/createclass.service';
import { Class } from '../model/class';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']  // Ensure this is correct
})
export class ClassesComponent {
  
  classList: Class[] = [];

  constructor(private dataService: CreateclassService) {}

  ngOnInit(): void {
    this.dataService.getAllClass().subscribe(res => {
      this.classList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }


}
