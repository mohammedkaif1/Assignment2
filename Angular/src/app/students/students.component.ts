import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students:Student[]=[]
  message:string=''
  colorClass:string=''
  upstudent:Student[]=[]
  constructor()
  {
    let s1=new Student(1,"Aravind",1,80,["java","python"]);
    let s2=new Student(2,"Rahul",5,70,["AWS","AIML"]);
    let s3=new Student(3,"kaaa",3,90,["AWS","AIML"],);
    let s4=new Student(4,"saa",2,50,["AWS","AIML"]);
    let s5=new Student(5,"saa",1,55,["AWS","AIML"])
 this.students.push(s1);
 this.students.push(s2);
 this.students.push(s3);
 this.students.push(s4);
 this.students.push(s5);


  }
  showStudents(){
   
  
  }
  deleteStudent(rollno:Number){
    const res=confirm("Do u Really Wanna Delete");
    if(res)
      { this.students=this.students.filter(s=>s.rollno !=rollno);
        this.message='Record Delete';
        this.colorClass='success'
      }
      else{
        this.colorClass='error'
        this.message='Record Delete cancelled';

      }
  }
  updateStudent(s:Student){
    let ss=new Student(s.rollno,s.name,s.numberOfAttempts,s.percentage,s.subjectLearning);
  this.upstudent.push(ss)  
  }

}
