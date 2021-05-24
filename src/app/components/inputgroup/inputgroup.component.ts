import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Sinhvien { id: string; name: string; email: string }

@Component({
  selector: 'app-inputgroup',
  templateUrl: './inputgroup.component.html',
  styleUrls: ['./inputgroup.component.scss']
})
export class InputgroupComponent implements OnInit {

  public sinhvienCol: AngularFirestoreCollection<Sinhvien>;
  public sinhvien: Observable<any>;
  constructor(private readonly afs: AngularFirestore) {
    this.sinhvienCol = afs.collection<any>('SinhVien');
    this.sinhvien = this.sinhvienCol.valueChanges();
    // console.log(this.items);
  }
  ngOnInit(): void {
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
    // console.log(name);
  }

}
