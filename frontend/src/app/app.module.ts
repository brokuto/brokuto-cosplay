import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { UploadDialogComponent } from './components/gallery/upload-dialog/upload-dialog.component';
import { ModalService } from './core/modal.service';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploadTaskComponent } from './components/gallery/upload-task/upload-task.component';
import { ImageViewDialogComponent } from './components/gallery/image-view-dialog/image-view-dialog.component';
import { InfoComponent } from './components/info/info.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: ImageViewDialogComponent },
  { path: 'info', component: InfoComponent },
  { path: 'upload', component: UploadDialogComponent },
  { path: 'video', component: VideoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    UploadDialogComponent,
    DropzoneDirective,
    UploadTaskComponent,
    ImageViewDialogComponent,
    InfoComponent,
    VideoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
