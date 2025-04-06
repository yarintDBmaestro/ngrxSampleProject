import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
    constructor(private http: HttpClient) {}
    increment(email: string | null) {
        return this.http.post('http://localhost:3000/increment', {email: email});
    }
    decrement(email: string | null) {
        return this.http.post('http://localhost:3000/decrement', {email: email});
    }
    reset(email: string | null) {
        return this.http.post('http://localhost:3000/reset', {email: email});
    }

    getCounter(email: string | null) {
        console.log('getCounter', email);
        return this.http.get(`http://localhost:3000/counter?email=${email}`);
    }
}   
