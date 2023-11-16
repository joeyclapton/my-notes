import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.sass'
})
export class NotesListComponent {

}
