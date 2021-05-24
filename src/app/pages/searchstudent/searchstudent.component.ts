import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs'

export interface Sinhvien { id: string; name: string; email: string }
@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.scss']
})
export class SearchstudentComponent implements OnInit {
  public sinhvienCol: AngularFirestoreCollection<Sinhvien>;
  public sinhvien: Observable<any>;
  constructor(private readonly afs: AngularFirestore) {
    this.sinhvienCol = afs.collection<any>('SinhVien');
    this.sinhvien = this.sinhvienCol.valueChanges();
  }

  ngOnInit(): void {
  }
  searchByID(id){

  }
}
