import { Component, OnInit } from '@angular/core';
import { INote } from '../../api/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  cardTitle: string = 'Добавяне на бележка';
  btnLabel: string = 'Съхрани бележка';
  noteIndex: number = 0;
  title: string = '';
  invalidTitle: boolean = false;
  invalidDesc: boolean = false;
  titleMinLength: number = 5;
  descriptionMinLength: number = 7;
  editIndex: number = 0;
  description: string = '';
  note?: INote;
  notes: INote[] = [];

  showButtons: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  checkForm() {
    if (this.title.length < this.titleMinLength) {
      this.invalidTitle = true;
    } else {
      this.invalidTitle = false;
    }
    if (this.description.length < this.descriptionMinLength) {
      this.invalidDesc = true;
    } else {
      this.invalidDesc = false;
    }
    if (
      this.title.length >= this.titleMinLength &&
      this.description.length >= this.descriptionMinLength
    ) {
      return true;
    }
    return false;
  }

  addNote() {
    if (this.btnLabel == 'Съхрани бележка') {
      if (this.checkForm()) {
        this.noteIndex++;
        this.note = {
          id: this.noteIndex,
          title: this.title,
          description: this.description,
        };
        this.notes.push(this.note!);
        this.title = '';
        this.description = '';
      } else {
      }
    } else {
      if (this.checkForm()) {
        this.notes[this.editIndex].title = this.title;
        this.notes[this.editIndex].description = this.description;
        this.title = '';
        this.description = '';
      }
    }
  }

  editNote(index: number) {
    this.editIndex = index;
    this.btnLabel = 'Редакция';
    let note = this.notes[index];
    this.title = note.title;
    this.description = note.description;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
