import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardItemInterface} from "../interfaces/card-item-interface";
import {DataFetchService} from "./data-fetch.service";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() {

  }

  store = new BehaviorSubject<{ data: CardItemInterface[] | [], searchedData: string }>({
      data: [],
      searchedData: ""
    }
  );
}
