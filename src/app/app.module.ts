import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChildActionButtonsComponent } from './Components/child-action-buttons/child-action-buttons.component';
import { ChildTableComponent } from './Components/child-table/child-table.component';
import { MainComponent } from './Components/main/main.component';
import { ParentActionButtonsComponent } from './Components/parent-action-buttons/parent-action-buttons.component';
import { ParentTableComponent } from './Components/parent-table/parent-table.component';

@NgModule({
  declarations: [
    MainComponent,
    ParentTableComponent,
    ChildTableComponent,
    ParentActionButtonsComponent,
    ChildActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [provideAnimations()],
  bootstrap: [MainComponent]
})
export class AppModule { }
