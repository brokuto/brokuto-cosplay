import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalService } from 'src/app/core/modal.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { tap, finalize } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private pictureCollection: AngularFirestoreCollection<any>;
  pictures: Observable<any>;

  imgUrl: string = "";

  imageHard: number = 0;

  constructor(
    private modalService: ModalService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pictureCollection = this.db.collection<any>("files");
    this.pictures = this.pictureCollection.valueChanges();
  }

  openModal(id: string, imgUrl: string, imageHard: number) {
    this.modalService.open(id);
    this.imgUrl = imgUrl;
    this.imageHard = imageHard;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // uploader
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}

