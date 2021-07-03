import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paggination',
  templateUrl: './paggination.component.html',
  styleUrls: ['./paggination.component.css']
})
export class PagginationComponent implements OnInit {
  @Input()
  totalItems: number
  @Input()
  page: number

  constructor() {
  }

  ngOnInit(): void {
  }

}
