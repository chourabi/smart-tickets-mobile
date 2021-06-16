import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  trips = [];
  line="";

  constructor(private route:ActivatedRoute,private db:AngularFirestore) {  }

  ngOnInit() {
    this.line = this.route.snapshot.params.id;
    

    this.db.collection('triptogo').valueChanges().subscribe((data)=>{
      this.getTrips();
    })

    this
  }

  getTrips(){
    this.trips= [];
    this.db.collection('triptogo').get().subscribe((data:any)=>{
      console.log(data);
      

      let tmp = data.docs.filter((trip)=> trip.data().trajet === this.line );
      

      tmp.forEach((x:any) => {
          // get vehicule
          var t = x.data();

          this.db.collection('vehicules').doc(t.vehicule).get().subscribe((res)=>{
            console.log(res.data());
            
            t.vehicule = res.data();
            this.trips.push({
              id: x.id,
              data:t
            })
          })

          
      });

      setTimeout(() => {
        console.log(this.trips);
      }, 2000);
      

      
      
    })
  }

}
