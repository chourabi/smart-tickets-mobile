import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.required),
    
  })

  errMSG='';

  constructor( private auth:AngularFireAuth, private router:Router, private db:AngularFirestore ) { }

  ngOnInit() {
    
  }


  authNow(){
    this.errMSG='';
    this.auth.signInWithEmailAndPassword(this.authForm.value.email,this.authForm.value.password).then((res)=>{
      // check if employee

      this.db.collection('employees').doc(res.user.uid).get().subscribe((res)=>{
        if (res.exists) {
          // is employee
          this.router.navigate(['/profile'])
          
        }else{
          // back to home page
          this.router.navigate(['/home'])

        }
      })
      
    }).catch((err)=>{
      this.errMSG='Mauvais email ou password.';
    })
  }
}
