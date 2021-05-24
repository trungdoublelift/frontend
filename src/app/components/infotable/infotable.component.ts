import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {UpdatemodalComponent} from '../updatemodal/updatemodal.component'
export interface Sinhvien {
  id: string;
  name: string;
  email: string;
  graduated:boolean;
}

@Component({
  selector: 'app-infotable',
  templateUrl: './infotable.component.html',
  styleUrls: ['./infotable.component.scss']
})
export class InfotableComponent implements OnInit {


  public sinhvienCol: AngularFirestoreCollection<Sinhvien>;
  public sinhviens: Observable<any>;
  constructor(private readonly afs: AngularFirestore) {
    this.sinhvienCol = afs.collection<any>('SinhVien');
    this.sinhviens = this.sinhvienCol.valueChanges({idField:'idDoc'});
  }

  async deleteSV(sinhvien:any) {
    console.log(sinhvien)
    this.afs.collection("SinhVien").doc(sinhvien.idDoc).delete().then(() => {
      alert("Xóa sinh viên " + sinhvien.name + "thành công !!!")
    })
  }

  ngOnInit(): void {
  }
  openUpdateModal(){
    
  }

}
