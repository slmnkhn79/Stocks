import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageSrapperComponent } from './page-srapper/page-srapper.component';
import { HomeComponent } from './home/home.component';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { RecentsComponent } from './recents/recents.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import {DialogComponent} from './import/dialog/dialog.component';
import { ImportService } from './import/import.service';
import {MaterialModule} from './material-module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home', component:HomeComponent},
  {path : 'allstocks',component:AllstocksComponent},
  {path : 'search',component:SearchComponent},
  {path : 'recents',component:RecentsComponent},
  {path:'upload',component:UploadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageSrapperComponent,
    HomeComponent,
    AllstocksComponent,
    RecentsComponent,
    SearchComponent,
    UploadComponent,
    FileSelectDirective,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ImportService],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
