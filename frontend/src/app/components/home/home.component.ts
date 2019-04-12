import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Test } from 'src/app/models/test';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  email: string;

  /* private testCollection: AngularFirestoreCollection<Test>;
  tests: Observable<Test[]>; */

  private pictureCollection: AngularFirestoreCollection<any>;
  pictures: Observable<any>;

  constructor(
    private data: DataService,
    private afs: AngularFirestore
  ) {
    /* this.testCollection = afs.collection<Test>('tests');
    this.tests = this.testCollection.valueChanges(); */

    this.pictureCollection = this.afs.collection<any>("files");
    this.pictures = this.pictureCollection.valueChanges();
  }

  ngOnInit() {
  }

  /* onSubmit() {
    this.testCollection.add(
      {
        'name': this.name,
        'email': this.email,
      }
    );

    this.name = '';
    this.email = '';

    alert("Successfully created test!");
  } */




}
