import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-inputgroup',
  templateUrl: './inputgroup.component.html',
  styleUrls: ['./inputgroup.component.scss']
})
export class InputgroupComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    // this.insertFrm = this.fb.group({
    //   id:['',Validators.required], 
    //   name:['',[Validators.required]],
    //   description:[''],})
  }

}
