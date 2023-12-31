import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../../services/note/note.service';
import { Note } from '../../interface/note.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteComponent, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass',
})
export class NotesListComponent implements OnInit {
  noteService = inject(NoteService);
  notes: Note[] = [];

  constructor() {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
  }
}
