import { Component } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
 std = new Student("Vipul",23,"uday@gmail.com");
  save(formData:any){
    // console.log(formData);
    const std = new Student(formData.name,formData.age,formData.email);
    console.log(std);
  }
}
