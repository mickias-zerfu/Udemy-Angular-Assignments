// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AccountService {

  constructor() { }
  

  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    // this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    // this.loggingService.logStatusChange(status);
  }
}
