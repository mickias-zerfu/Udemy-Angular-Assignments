import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  showdetail = false;
  store = [];
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    this.showdetail = !this.showdetail;
    this.count++;
    this.store.push(this.count)
  }
}
