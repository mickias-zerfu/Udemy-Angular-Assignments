import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  userName ='';
  constructor() { }

  ngOnInit(): void {
  }
  resetUSerName(){
    this.userName='';
  }
}
