import { Component } from '@angular/core';
import { MetadataService } from './services/metadata.service';
import { Observable } from 'rxjs';
import { MetaInfoModel } from './models/metadata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  metadata$: Observable<MetaInfoModel[]> = this.service.getMetadata();
  constructor(private service: MetadataService) {}
}
