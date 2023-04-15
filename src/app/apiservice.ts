import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './models/account';
import { User } from './models/user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, @Inject('baseURL') private baseURL: string) { }

  getAccounts(): Observable<any> {
    const url = this.baseURL + 'Accounts';
    // Make GET request to fetch accounts from API
    return this.http.get<Account[]>(url);
  }

  getUsers(): Observable<any> {
    const url = this.baseURL + 'Users';
    // Make GET request to fetch accounts from API
    return this.http.get<User[]>(url);
  }

  deposit(accountId: number, userId: number, amount: number): Observable<any> {
    const url = `${this.baseURL}Accounts/deposit?accountId=${accountId}&userId=${userId}&amount=${amount}`;
    return this.http.post(url, null);
  }

  withdraw(accountId: number, userId: number, amount: number): Observable<any> {
    const url = `${this.baseURL}Accounts/withdraw?accountId=${accountId}&userId=${userId}&amount=${amount}`;
    return this.http.post(url, null);
  }
}