import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseTeampickerComponent } from './components/teampicker/base-teampicker/base-teampicker.component';
import { Gen3TeampickerComponent } from './components/teampicker/gen3-teampicker/gen3-teampicker.component';
import { RubySheetComponent } from './components/sheets/ruby-sheet/ruby-sheet.component';
import { MainComponent } from './components/main/main.component';
import { RubyTrainerPickerComponent } from './components/trainer-picker/ruby-trainer-picker/ruby-trainer-picker.component';
import { EmeraldSheetComponent } from './components/sheets/emerald-sheet/emerald-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseTeampickerComponent,
    Gen3TeampickerComponent,
    RubySheetComponent,
    MainComponent,
    RubyTrainerPickerComponent,
    EmeraldSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
