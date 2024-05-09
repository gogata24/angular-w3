import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: NotesComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
