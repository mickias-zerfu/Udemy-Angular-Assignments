import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.css'],
  providers:[AccountService]
})
export class SectionNineComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.accounts= this.accountService.accounts;
  }
}
