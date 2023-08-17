import { Component } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  SelectedHobbies : string[]=[];
 std = new Student();
 constructor(){
  this.std.country="";
 }
  save(formData:any){
    // console.log(formData);
    const std = new Student(formData.name,formData.age,formData.email);
    console.log(this.std);
    console.log(this.SelectedHobbies);
    
  }

 
  onChange(e:any){
    let selectedValue = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      this.SelectedHobbies.push(selectedValue);
    }else{
      let index = this.SelectedHobbies.indexOf(selectedValue);
      this.SelectedHobbies.splice(index, 1);
    }
  //   console.log(selectedValue,checked)
     console.log(this.SelectedHobbies)
  }
}
