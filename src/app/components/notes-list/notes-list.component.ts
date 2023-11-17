import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../../services/note/note.service';
import { Note } from '../../interface/note.interface';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass'
})
export class NotesListComponent implements OnInit {
 noteService = inject(NoteService)
 notes: Note[] = []
 title = new FormControl('')

 constructor() {}
 
 
 ngOnInit(): void {
   this.notes = this.noteService.getAll();
 }

 onSave() {
    console.log(this.title)
 }
}
