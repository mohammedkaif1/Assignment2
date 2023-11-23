import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { Cons } from 'rxjs';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
   percentages:any=[];
  constructor()
  {
    let s1=new Student(1,"Aravind",1,80,["java"]);
    let s2=new Student(2,"Rahul",5,70,["AWS","AIML"]);
    let s3=new Student(3,"kaaa",3,90,["AWS"],);
    let s4=new Student(4,"saa",2,50,["AWS","AIML"]);
    let s5=new Student(5,"saa",1,55,["AWS","AIML"])
 this.students.push(s1);
 this.students.push(s2);
 this.students.push(s3);
 this.students.push(s4);
 this.students.push(s5);


  }
  sortByPercentage()
  {
    this.percentages=this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  }
  sortByAttempts()
  {
    this.percentages=this.students.sort((a, b) => a.numberOfAttempts.toString().localeCompare(b.numberOfAttempts.toString()));
  }
  sortByNoOfsubLearning()
  {
    this.percentages=this.students.sort((a, b) => a.subjectLearning.length.toString().localeCompare(b.subjectLearning.length.toString()));
 
  }
}
