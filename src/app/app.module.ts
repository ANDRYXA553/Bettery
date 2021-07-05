import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-list/card-item/card-item.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes:Routes=[
  {path:'',component:CardListComponent},
  {path:':sortType',component:CardListComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    NavigationComponent,
    CardListComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(routes), NgxPaginationModule,
    NgbModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
