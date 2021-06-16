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
    this.watchTrips();
  }

  watchTrips(){
    this.db.collection('triptogo').valueChanges().subscribe((data:any)=>{
      console.log(data);
      
      this.trips= [];

      let tmp = data.filter((trip)=> trip.trajet === this.line );
      

      tmp.forEach((x:any) => {
          // get vehicule
          var t = x;

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
