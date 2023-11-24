import { Injectable } from '@angular/core';
import { Note } from '../../interface/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[];

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

    console.log('Updated Notes: ', this.notes);
  }

  getAll(): Note[] {
    return [
      {
        id: 1,
        title: 'Lorem ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'Shakespeare',
        description: 'To be, or not to be: that is the question.',
      },
    ];
  }

  findById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }
}
