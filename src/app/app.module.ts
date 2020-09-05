import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NewJwComponent } from './new-jw/new-jw.component';


@NgModule({
  declarations: [
    AppComponent,
    TablePaginationComponent,
    JwPaginationComponent,
    NewJwComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
