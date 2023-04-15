import { Component } from '@angular/core';
import { Account } from './models/account';
import { User } from './models/user';
import { ApiService } from './apiservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accolite-bank-ui';
  accounts: Account[] = [];
  users: User[] = [];
  depositMessage: string | undefined;
  withdrawMessage: string | undefined;
  accountId: number = 0;
  userId: number = 0;
  amount: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAccounts();
    this.getUsers();
  }

  getAccounts() {
    this.apiService.getAccounts().subscribe(
      (response) => {
        this.accounts = response;
      },
      (error) => {
        console.error('Error fetching accounts:', error);
      }
    );
  }

  getUsers() {
    this.apiService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onDeposit() {
    this.apiService.deposit(this.accountId, this.userId, this.amount).subscribe(
      () => {
        this.depositMessage = 'Deposit successful!';
      },
      (error) => {
        this.depositMessage = `Error: ${error.error}`;
      }
    );
  }

  onWithdraw() {
    this.apiService.withdraw(this.accountId, this.userId, this.amount).subscribe(
      () => {
        this.withdrawMessage = 'Withdraw successful!';
      },
      (error) => {
        this.withdrawMessage = `Error: ${error.error}`;
      }
    );
  }
}
