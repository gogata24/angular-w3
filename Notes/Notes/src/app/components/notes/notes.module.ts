import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
  ],
})
export class NotesModule {}
