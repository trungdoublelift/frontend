import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SinhVien } from 'src/app/models/SinhVien';

export interface Sinhvien { id: string; name: string; email: string }

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  
  public sinhvienCol: AngularFirestoreCollection<Sinhvien>;
  public sinhvien: Observable<any>;
  constructor(private readonly afs: AngularFirestore,private http:HttpClient,private fb:FormBuilder) {
    this.sinhvienCol = afs.collection<any>('SinhVien');
    this.sinhvien = this.sinhvienCol.valueChanges();
    // console.log(this.items);
  }
  
 
    
  ngOnInit(): void {
    // this.insertFrm = this.fb.group({
    //   id:['',Validators.required], 
    //   name:['',[Validators.required]],
    //   email:['',[Validators.required],[Validators.email]],
    // })
  }

  createSVApi():Observable<SinhVien>{
 
    let id = (<HTMLInputElement>document.getElementById("form6Example1")).value;
    let name = (<HTMLInputElement>document.getElementById("form6Example2")).value;
    let email = (<HTMLInputElement>document.getElementById("form6Example3")).value;
    let data=new SinhVien(id,name,email);
      return this.http.post<SinhVien>('http://localhost:8080/createSV', data);

  }

  addSV() {
    let id = (<HTMLInputElement>document.getElementById("id")).value;
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    this.afs.collection("SinhVien").doc().set({
      id: id,
      name: name,
      email: email,
      graduated:false,
    })
      .then(() => {
        alert("Thêm sinh viên thành công");
      })
  }


}
