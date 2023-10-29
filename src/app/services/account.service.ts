import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'; // Import environment
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) { }

    async addAccount(payload): Promise<void> {
        try {
            const apiUrl = `${environment.apiUrl}accounts`;
            const response = await this.http.post(apiUrl, payload).toPromise();
            console.log('Account added:', response);
        } catch (error) {
            console.error('Error adding account:', error);
        }
    }

    getAllAccounts(userId: string): Observable<any> {
        const url = `${environment.apiUrl}accounts?user_id=${userId}`;
        return this.http.get(url);
    }

    getAccount(accountId: string): Observable<any> {
        const userId = localStorage.getItem('userId');
        const url = `${environment.apiUrl}accounts/${userId}/${accountId}`;
        return this.http.get(url);
    }

    async updateAccount(payload, accountId: string): Promise<void> {
        try {
            const userId = localStorage.getItem('userId');
            const url = `${environment.apiUrl}accounts/${userId}/${accountId}`;
            const response = await this.http.put(url, payload).toPromise();
        } catch (error) {
            console.error('Error adding account:', error);
        }
    }

}