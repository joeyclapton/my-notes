import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../../services/note/note.service';
import { Note } from '../../interface/note.interface';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteComponent, ReactiveFormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass',
})
export class NotesListComponent implements OnInit {
  noteService = inject(NoteService);
  notes: Note[] = [];
  formNotes = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
  }

  onSave() {
    if (this.formNotes.valid) {
      const { title, description } = this.formNotes.value;
      const note = {
        id: 0,
        title: title as string,
        description: description as string,
      };
      this.noteService.create(note);
      this.notes = this.noteService.getAll();
    }
  }
}
