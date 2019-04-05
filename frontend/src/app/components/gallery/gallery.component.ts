import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/modal.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

