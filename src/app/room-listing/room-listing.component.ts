import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.css']
})
export class RoomListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getRooms();
    
  }


  getRooms(){

  }

  getTenants(roomNo){
    
  }
}
