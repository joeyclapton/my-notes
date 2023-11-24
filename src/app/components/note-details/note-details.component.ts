import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NoteService } from '../../services/note/note.service';
import { Note } from '../../interface/note.interface';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.sass',
})
export class NoteDetailsComponent implements OnInit {
  noteService = inject(NoteService);
  activeRoute = inject(ActivatedRoute);

  note!: Note;
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.setCurrentNote();
  }

  setCurrentNote() {
    if (!this.id) return;

    const currentNote = this.noteService.findById(this.id);

    if (currentNote) this.note = currentNote;
  }
}
