import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  

  lines = [];

  constructor(private data: DataService, private db:AngularFirestore ) {}

  ngOnInit(): void {
    this.getLines();
  }

  refresh(ev) {
    

    this.lines=[];
    this.db.collection('trajets').get().subscribe((data)=>{
      data.forEach((doc)=>{
        this.lines.push(doc.data());
      })
      ev.detail.complete();
    },(err)=>{
      ev.detail.complete();
    })
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getLines(){
    this.lines=[];
    this.db.collection('trajets').get().subscribe((data)=>{
      data.forEach((doc)=>{
        this.lines.push(doc.data());
      })
    })
  }

}
