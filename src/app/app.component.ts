import {Component} from '@angular/core';
import {DataFetchService} from "./services/data-fetch.service";
import {DataTransferService} from "./services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private dataFetchService: DataFetchService, private dataTransferService: DataTransferService) {

    dataFetchService.getData().subscribe(value => {
      dataTransferService.store.next({data: value, searchedData: ""})
    })
  }
}
