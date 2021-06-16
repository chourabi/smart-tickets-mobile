import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    fullname: new FormControl('',Validators.required),
    
    
    
  })

  errMSG='';

  constructor( private auth:AngularFireAuth, private router:Router, private db:AngularFirestore ) { }

  ngOnInit() {
    
  }


  authNow(){
    this.errMSG='';
    this.auth.createUserWithEmailAndPassword(this.authForm.value.email,this.authForm.value.password).then((res)=>{
      // check if employee

      delete this.authForm.value.password;

      this.db.collection('clients').doc(res.user.uid).set(this.authForm.value).then((res)=>{
          // is employee
          this.router.navigate(['/home'])
          
        
      })
      
    }).catch((err)=>{
      this.errMSG='Mauvais email ou password.';
    })
  }
}
