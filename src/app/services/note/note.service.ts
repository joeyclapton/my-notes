import { Injectable } from '@angular/core';
import { Note } from '../../interface/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];

  constructor() {
    this.notes = this.getAll();
  }

  create(note: Note) {
    const id = this.notes.length + 1;
    const updatedNotes = this.notes.concat({
      ...note,
      id,
    });

    this.notes = updatedNotes;

    //localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getAll(): Note[] {
    return this.notes;
  }

  findById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }
}
