import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PartsFormComponent } from './parts-form/parts-form.component';
import { PartsService } from './parts.service';
import { PartsListComponent } from './parts-list/parts-list.component';
import { PartsDetailComponent } from './parts-detail/parts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PartsFormComponent,
    PartsListComponent,
    PartsDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [
      PartsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
