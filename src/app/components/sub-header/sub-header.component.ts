import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  searchData: string

  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  search() {
    if (this.searchData !== "") {
      const {data} = this.dataTransfer.store.getValue();

      this.dataTransfer.store.next({data, searchedData: this.searchData});

    } else if (this.searchData == "") {
      const {data} = this.dataTransfer.store.getValue();

      this.dataTransfer.store.next({data, searchedData:""});
      this.ngOnInit();
    }


  }
}
