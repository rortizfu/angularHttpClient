import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatCardSmImage} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPresentationComponent } from './card-presentation/card-presentation.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ServicesDatasourcesService } from 'src/app/Services/services-datasources.service';
import { ServicesRepositoryService } from 'src/app/Services/services-repository.service';
import { PresentationComponent } from './presentation/presentation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardPresentationComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicesRepositoryService,
    ServicesDatasourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
