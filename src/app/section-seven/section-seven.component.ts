import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-seven',
  templateUrl: './section-seven.component.html',
  styleUrls: ['./section-seven.component.css']
})
export class SectionSevenComponent implements OnInit {

  // numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  odds = [1, 3, 5];
  evens = [2, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
