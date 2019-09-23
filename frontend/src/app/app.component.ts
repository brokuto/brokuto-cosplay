import { Component } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loaderComponent = LoaderComponent;

  constructor(private spinner: SpinnerVisibilityService) { 
    spinner.show();
  }

  ngOnInit() { }

}
