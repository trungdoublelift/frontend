import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public username:any;
  public thumbnail:any;
  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user=>{
      this.username=user?.displayName;
      this.thumbnail=user?.photoURL;
    })
  }
 

  ngOnInit(): void {
  }
  async login() {
   
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(googleAuthProvider);

    try {
      await this.auth.signInWithPopup(googleAuthProvider);
      alert('Login successfully');
     }
    catch (err) {
      await alert('Login fail');
    }
  }
  async logout() {
    this.auth.signOut();
    if (!this.auth.currentUser) {
      alert("logout successfully")
    }
  }

}
