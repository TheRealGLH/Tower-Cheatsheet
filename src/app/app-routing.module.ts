import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubySheetComponent } from './components/sheets/ruby-sheet/ruby-sheet.component';
import { EmeraldSheetComponent } from './components/sheets/emerald-sheet/emerald-sheet.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'ruby', component: RubySheetComponent },
  { path: 'emerald', component: EmeraldSheetComponent },
  { path: '**', component: MainComponent },//Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
