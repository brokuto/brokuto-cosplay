import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Test } from '../models/test';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public data: any;

    private testCollection: AngularFirestoreCollection<Test>;
    tests: Observable<Test[]>;

    constructor(
        private http: HttpClient,
        private readonly afs: AngularFirestore
    ) {
        this.testCollection = afs.collection<Test>('tests');
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
